import constants from './constants'

var initialState = {
	feeds: {},
	currentnav: {id: 'feeds', name: 'feeds'},
}

export default (state = initialState, action) => {
	let updatedState = Object.assign({}, state)

	switch (action.type){
		case constants.LOAD_FEEDS:
			updatedState['feeds'] = action.feeds
			return updatedState

		case constants.PUSH_ROUTE:
			updatedState['currentnav'] = action.route
			return updatedState

		case constants.UPDATE_ROUTE:
			updatedState['currentnav'] = action.route
			return updatedState
		
		
		default: 
			return updatedState
	}

}