import { Action } from '@ngrx/store';

export namespace TITLE_ACTION { 
	export const CHANGE_TITLE = 'CHANGE_TITLE'
}

export class ChangeTitle implements Action { 
	readonly type = TITLE_ACTION.CHANGE_TITLE
	constructor(public title) { }
}
