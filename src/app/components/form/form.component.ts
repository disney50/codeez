import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { Codee } from 'src/app/models/codee';
import { AppState } from 'src/app/store/app-state';
import { CodeeService } from 'src/app/services/codee/codee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  codeez: Codee[];
  newCodee: Codee = {} as Codee;

  constructor(private store: Store<AppState>, private codeeService: CodeeService, public router: Router) { }

  ngOnInit() {
    this.store.dispatch(new actions.GetCodeez);

    this.store.select("codee").subscribe(codeeState => {
      this.codeez = codeeState.codeez;
      console.log(this.codeez);
    })    
  }

  addNewCodee(): void {
    this.codeeService.addNewCodee(this.newCodee);
    this.newCodee = {} as Codee;
  }

  navigateList() {
    this.router.navigate(['list']); 
  }
}
