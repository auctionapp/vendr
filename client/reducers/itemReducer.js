export default function(state = {title: "Chose a item"}, action) {
	switch(action.type) {
	case 'SELECTED_ITEM':
	  return action.payload;
	
	default:
	  return state;
	}
}