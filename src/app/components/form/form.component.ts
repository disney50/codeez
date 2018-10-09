import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { Codee } from 'src/app/models/codee';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  codeez: Codee[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetCodeez);

    this.store.select("codee").subscribe(codeeState => {
      this.codeez = codeeState.codeez;
      console.log(this.codeez);
    })    

  }
}
