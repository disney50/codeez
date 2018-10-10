import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { Codee } from 'src/app/models/codee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  codeez: Codee[];

  constructor(private store: Store<AppState>, public router: Router) { }

  ngOnInit() {
    this.store.select("codee").subscribe(codeeState => {
      this.codeez = codeeState.codeez;
    })
  }

  navigateForm() {
    this.router.navigate([''])
  }

}
