import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TitleState } from '../../redux/app.state';

@Component({
  selector: 'app-c1-main',
  templateUrl: './c1-main.component.html',
  styleUrls: ['./c1-main.component.scss']
})
export class C1MainComponent implements OnInit {
  public title: string;

  constructor(private store:Store<TitleState> ) { }

  ngOnInit() {
    this.store.select('title').subscribe(data => { 
      this.title = data['title'];
    })
  }
}
