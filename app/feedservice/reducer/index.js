import constants from './constants'

var initialState = {
	
}

export default (state = initialState, action) => {
	let updatedState = Object.assign({}, state)

	switch (action.type){
		case constants.LOAD_FEEDS:
			console.log("...loading feeds" + JSON.stringify(action.user))

			return updatedState

		default: 
			return updatedState
	}

}