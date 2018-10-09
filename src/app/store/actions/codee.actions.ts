import { Action } from '@ngrx/store';
import { Codee } from 'src/app/models/codee';

export const GET_CODEEZ = '[codee] GET_CODEEZ';
export const GET_CODEE_SUCCESS = '[codee] GET_CODEEZ_SUCCESS';

export class GetCodeez implements Action {
    type = GET_CODEEZ;
    constructor () {}
}

export class GetCodeeSuccess implements Action {
    type = GET_CODEE_SUCCESS;
    constructor (public payload: Codee) {}
}

export type CodeeAction = 
    | GetCodeez
    | GetCodeeSuccess