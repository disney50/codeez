import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Codee, CodeeData } from 'src/app/models/codee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeeService {
  codeez$: Observable<any>;
  codeeCollection: AngularFirestoreCollection<Codee>;

  constructor(db: AngularFirestore) {
    this.codeeCollection = db.collection<Codee>("codeez");

    this.codeez$ = db.collection("codeez").snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => new Codee(action.payload.doc.id, action.payload.doc.data() as CodeeData));
      })
    )
   }
}
