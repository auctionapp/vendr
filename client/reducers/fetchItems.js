export default function(state = [], action) {
	switch(action.type) {
	
	case 'FETCH_ITEMS':
	  console.log("hey",action.payload)
	  return action.payload ;

	default:
	return state 
	}
}