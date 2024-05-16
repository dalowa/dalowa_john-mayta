interface Content {
	type: 'text' | 'image' | 'quote'
	content: string
}

interface PostData {
	authorData: {
		image: string
		name: string
	}
	date: string
	mainLabel: string
	content: Content[]
   labels: string[]
	prevPost: {
		url: string
		name: string
      /* imageUrl: string */
	}
	nextPost: {
		url: string
		name: string
      /* imageUrl: string */
	}
}

export const dataPostFrameDataUrl =
	'/api/v2/folder/user/seven/FAKE-OWNER-TESTING/ES/PAGES/TEST-POST'

export const dataPostTest: PostData = {
	authorData: {
		image: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'BRAYAN PETERSON',
	},
	date: '29 JAN 2016',
   labels: ['PHOTOGRAPHY','FASHION' , 'BLACK & WHITE'],
	mainLabel: 'FASHION',
	content: [
		{
			type: 'text',
			content:
				'Viverra ipsum libero consequatur sit lectus convallis in vehicula enim libero eget mauris consequat nonummy. Etiam varius porta. Quam nibh porta nam euismod in. Debitis sociis phasellus feugiat luctus diam. Vitae aenean odio ligula interdum suscipit. Viverra massa blandit. Tempor sit nam.',
		},
		{
			type: 'text',
			content:
				'At tortor quis. Aut odio nibh. Aliquet neque dis gravida adipiscing feugiat. Elit amet metus. Magna suscipit risus. Arcu elementum accumsan. Pede tincidunt mauris lobortis aliquam sed fusce libero duis senectus nec ipsum. Libero amet mi. Tempor ante est non ut libero. Enim integer mauris dapibus rutrum hymenaeos leo bibendum quisque ac quis pellentesque. Tellus vestibulum aliquet praesent praesent rhoncus nam cras varius.',
		},
		{
			type: 'image',
			content: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/big/img-5.jpg',
		},
		{
			type: 'text',
			content:
				'Dolor elit condimentum erat dapibus ac purus eleifend amet sed ac pede. Condimentum volutpat nulla. Molestie est ac. Integer perferendis donec. Venenatis id diam at justo vulputate. Volutpat maecenas eget fugiat fringilla sapien. Ultrices quam habitant augue tincidunt a. Nulla lobortis commodo. Vivamus at tortor. Nunc eget volutpat eu fusce hac. Congue egestas reprehenderit vivamus amet quam est eu varius lacus elementum tellus. Non leo faucibus aenean a ut sed nam enim.',
		},
		{
			type: 'text',
			content:
				'Purus pede eget neque eget a. Eget mauris justo vehicula et metus nec primis tincidunt. Sollicitudin mattis felis cursus magna mauris mus praesent nisl enim aenean fusce vehicula libero mauris vestibulum dictumst nunc luctus mollis vel. Et con nulla proin blandit nunc.',
		},
		{
			type: 'image',
			content: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/big/img-4.jpg',
		},
		{
			type: 'quote',
			content:
				'Non mauris nullam. Wisi gravida quis quisque mattis dolor. Etiam sociis turpis nesciunt sed lacus sed hendrerit diam. Accumsan varius venenatis arcu maecenas nulla. Aliquet tempus lobortis. Tortor nibh erat vel gravida est accumsan ut ad. Orci malesuada morbi. Luctus pharetra lectus.',
		},
		{
			type: 'text',
			content:
				'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet. Risus mi vitae hendrerit orci vitae amet libero id eget quis nullam. Sed elit cubilia blandit viverra dui semper donec congue. Ac vestibulum venenatis. Risus commodo senectus et natoque euismod quis eros mollis. Vel commodo sem vel nonummy purus.',
		},
		{
			type: 'text',
			content:
				'Iaculis molestie rhoncus. Amet maecenas ut orci id dui. Et dui morbi. Non mauris nullam. Wisi gravida quis quisque mattis dolor. Etiam sociis turpis nesciunt sed lacus sed hendrerit diam. Accumsan varius venenatis arcu maecenas nulla. Aliquet tempus lobortis. Tortor nibh erat vel gravida est accumsan ut ad. Orci malesuada morbi. Luctus pharetra lectus. Vestibulum proin etiam etiam eget in. Nibh wisi velit. Pellentesque justo tellus est cras ligula. Feugiat fringilla sequi. A nunc adipiscing nisl lorem morbi tincidunt gravida ut. Totam tempor eget. Mauris nunc sodales nulla urna tortor erat scelerisque consequat ullamcorper est enim maecenas ultrices condimentum.',
		},
		{
			type: 'text',
			content:
				'Diam faucibus aliquam vestibulum vehicula wisi ut volutpat nulla. Torquent lectus quisque purus fermentum pellentesque. Morbi justo nam. Vulputate non mi. Felis scelerisque metus suspendisse lectus erat sit fusce porttitor. Eget posuere massa. Justo felis tempor. Faucibus in diam id pede eu. Suspendisse eu neque elit explicabo malesuada. Dictum vel ut luctus ac ipsum integer egestas amet dui nisl pellentesque.',
		},
	],
	prevPost: {
		url: '#',
		name: 'NIGHT PHOTOGRAPHY',
	},
	nextPost: {
		url: '#',
		name: '5O QUICK PHOTOGRAPHY LARGE TEXT',
	},
}
