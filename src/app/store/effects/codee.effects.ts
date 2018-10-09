import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/firestore";
import * as actions from "../actions";
import { switchMap, mergeMap, map } from "rxjs/operators";
import { Codee, CodeeData } from "src/app/models/codee";

@Injectable()
export class CodeeEffects {
    constructor (private actions$: Actions, private db: AngularFirestore) {}

    @Effect()
    GetCodees$ = this.actions$.ofType(actions.GET_CODEEZ).pipe(
        switchMap(action => {
            return this.db.collection("codeez").stateChanges()
        }),
        mergeMap(actions => actions),
        map(action => {
            if(action.type === "added") {
                return new actions.GetCodeeSuccess(new Codee(action.payload.doc.id, action.payload.doc.data() as CodeeData));
            }
        })
    );
}