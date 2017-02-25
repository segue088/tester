import constants from './constants'

export default {

	loadFeeds: (user) => {
		// APIManager.get('http://localhost:3000/api/feed', null, (err, response) => {
	    //   if(err){
	    //     console.log('make am here')
	    //     return
	    //   }

	    //   console.log('make am for here goor')

	    // })
		const feed = {
			user: 'Kila Bongo',
			feed: 'Patient just took phynl injection scheduled for 3:30',
			sender: 'Nurse Venerate',      
			timestamp: '23-04-2017'  
		}

		return {
			type: constants.LOAD_FEEDS,
			feeds: feed 
		}
	},

	pushRoute: (route) => {
		return {
			type: constants.PUSH_ROUTE,
			route: route 
		}
	},

	updateRoute: (navigater) => {
		
		navigater.navigator.replace(navigater.route)
		
		return {
			type: constants.UPDATE_ROUTE,
			route: navigater.route 
		}
		
	},

}