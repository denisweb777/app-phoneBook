import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-c3-get',
  templateUrl: './c3-get.component.html',
  styleUrls: ['./c3-get.component.scss']
})
  
export class C3GetComponent implements OnInit {

  public persons:Object[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getDataHttp().subscribe((data) => {
      this.persons = Object(data).persons;
    })
  }
}
