import OAuth from 'oauth-1.0a'
import crypto from 'crypto'
import axios from 'axios'

export async function axiosWithOAuth(url: string, method: string = 'GET') {
	/* console.log('FETCHING WITH OAUTH HAS BEEN CALLED WITH URL:', url) */
	const consumerKey: string = process.env.CONSUMER_KEY as string
	const consumerSecret: string = process.env.CONSUMER_SECRET as string
	const accessToken: string = process.env.ACCESS_TOKEN as string
	const accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET as string
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
				method: method,
			},
			{
				key: accessToken,
				secret: accessTokenSecret,
			},
		),
	)

	/* const fetchResponse = await fetch(`${base_api_url}${url}`, {
        method: method,
        headers: {
            ...oauthHeader,
            'Accept': 'application/json',
        },
    });

    if (!fetchResponse.ok) {
        console.log(`Error al obtener los datos de ${url}`, fetchResponse);
        throw new Error(`${fetchResponse}`);
    }

    return fetchResponse; */

	try {
		const axiosResponse = await axios({
			method: method,
			url: `${base_api_url}${url}`,
			headers: {
				...oauthHeader,
				Accept: 'application/json',
			},
		})

		return axiosResponse
	} catch (error: any) {
		/* console.log(`Error al obtener los datos de ${url}`, error.response) */
		throw new Error(`${error.response}`)
	}
}
