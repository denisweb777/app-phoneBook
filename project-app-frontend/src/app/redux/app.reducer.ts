import { TITLE_ACTION, ChangeTitle } from './app.action';
import { TitleState } from './app.state';

let initialState = new TitleState();

export function phoneBookReducer(state = initialState, action: ChangeTitle) { 
	
	switch (action.type) { 
		
		case TITLE_ACTION.CHANGE_TITLE:
			return {
				...state,
				title: action.title
			}
			
		default:
			return state;
	}
}
