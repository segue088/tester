import superagent from 'superagent'

export default {

	get: (url, params, callback) => {
		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if(err){
				callback(err, null)
				console.log(err)
				return
			}
			else{
				console.log(JSON.stringify(response.body))
				// callback(null, response)
			}
		})

	},

	post: () => {

	},

	put: () => {

	},

	delete: () => {

	}
}