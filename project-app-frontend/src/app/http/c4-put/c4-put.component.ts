import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-c4-put',
  templateUrl: './c4-put.component.html',
  styleUrls: ['./c4-put.component.scss']
})
export class C4PutComponent implements OnInit {

  public person: Object;
  public form1: FormGroup;
  public form2: FormGroup;
  public response: Boolean = false;
  public firstName: String;
  public lastName: String;
  public firstNameAndLastName: any[];
  public phone: String;
  public id: String;
  public message: String;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.form1 = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[(a-z A-Z)+?]+$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[(a-z A-Z)+?]+$')])
    });

    this.form2 = new FormGroup({
      phone: new FormControl('', [Validators.required, Validators.pattern('^[+][0-9]{11}')])
    });
  }

  onSubmit1() {

    this.firstName = String(this.form1.get('firstName').value);
    this.lastName = String(this.form1.get('lastName').value);
    this.firstNameAndLastName = [this.firstName, this.lastName];
    
    this.httpService.getDataLoginHttp(this.firstNameAndLastName).subscribe((data) => {

      this.response = true;
      this.person = Object(data[0]);

      this.firstName = String(this.person['parameters'].firstName);
      this.lastName = String(this.person['parameters'].lastName);
      this.phone = String(this.person['phone']);
    })
  }

  onSubmit2() {
    
    this.id = String(this.person['_id']);
    this.phone = String(this.form2.get('phone').value);
    let data = { phone: this.phone };

    this.httpService.putDataHttp(this.id, data).subscribe((answer) => {
      this.message = Object(answer).message;
    })
    
  }
}

