import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-c5-delete',
  templateUrl: './c5-delete.component.html',
  styleUrls: ['./c5-delete.component.scss']
})
export class C5DeleteComponent implements OnInit {

  public form: FormGroup;
  public response: Boolean;
  public firstName: String;
  public lastName: String;
  public firstNameAndLastName: any[];
  public phone: String;
  public id: String;
  public person: Object;
  public message: String;

  constructor(private httpService: HttpService) { }
  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[(a-z A-Z)+?]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[(a-z A-Z)+?]+$')])
    });
  }

  onSubmit() {
    this.firstName = String(this.form.get('firstName').value);
    this.lastName = String(this.form.get('lastName').value);
    this.firstNameAndLastName = [this.firstName, this.lastName];

    this.httpService.getDataLoginHttp(this.firstNameAndLastName).subscribe((data) => {

      this.response = true;
      this.person = Object(data[0]);
      this.firstName = String(this.person['parameters'].firstName);
      this.lastName = String(this.person['parameters'].lastName);
      this.phone = String(this.person['phone']);
    })
  }

  deleteUser() { 
    
    this.id = String(this.person['_id']);

    this.httpService.deleteDataHttp(this.id).subscribe((answer) => { 
      this.message = Object(answer).message;
    })
  }
}
