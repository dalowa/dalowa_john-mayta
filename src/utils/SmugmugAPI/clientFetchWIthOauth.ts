import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

type OauthAccessObject = {
	consumerKey: string
	consumerSecret: string
	accessToken: string
	accessTokenSecret: string
}

export async function clientFetchWithOAuth(url: string, oauthAccessObject: OauthAccessObject) {
	const consumerKey: string = oauthAccessObject.consumerKey
	const consumerSecret: string = oauthAccessObject.consumerSecret
	const accessToken: string = oauthAccessObject.accessToken
	const accessTokenSecret: string = oauthAccessObject.accessTokenSecret
	const base_api_url = 'https://api.smugmug.com'

	const oauth = new OAuth({
		consumer: {
			key: consumerKey,
			secret: consumerSecret,
		},
		signature_method: 'HMAC-SHA1',
		hash_function(base_string: string, key: string) {
			return crypto.createHmac('sha1', key).update(base_string).digest('base64')
		},
	})

	const oauthHeader = oauth.toHeader(
		oauth.authorize(
			{
				url: `${base_api_url}${url}`,
				method: 'GET',
			},
			{
				key: accessToken,
				secret: accessTokenSecret,
			},
		),
	)

	const fetchResponse = await fetch(`${base_api_url}${url}`, {
		method: 'GET',
		headers: {
			...oauthHeader,
			Accept: 'application/json',
		},
	})

	if (!fetchResponse.ok) {
		console.log(`Error al obtener los datos de ${url}`, fetchResponse)
		throw new Error(`${fetchResponse}`)
	}

	return fetchResponse
}
