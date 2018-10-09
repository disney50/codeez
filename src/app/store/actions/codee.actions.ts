import { Action } from '@ngrx/store';
import { Codee } from 'src/app/models/codee';

export const GET_CODEEZ = '[codee] GET_CODEEZ';
export const GET_CODEE_SUCCESS = '[codee] GET_CODEEZ_SUCCESS';
export const UNIMPLEMENTED_ACTION = "[codee] UNIMPLEMENTED_ACTION";

export class GetCodeez implements Action {
    type = GET_CODEEZ;
    constructor () {}
}

export class GetCodeeSuccess implements Action {
    type = GET_CODEE_SUCCESS;
    constructor (public payload: Codee) {}
}

export class UnimplementedAction implements Action {
    type = UNIMPLEMENTED_ACTION;
    constructor (public payload: string) {}
}

export type CodeeActions = 
    | GetCodeez
    | GetCodeeSuccess
    | UnimplementedAction