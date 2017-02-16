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

		return {
			type: constants.LOAD_FEEDS,
			user: user 
		}
	}
}