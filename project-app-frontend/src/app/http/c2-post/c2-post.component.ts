import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './c2-post.component.html',
  styleUrls: ['./c2-post.component.scss']
})

export class C2PostComponent implements OnInit {

  form: FormGroup;
  private patternOnlyLatLetters: any = /^[(a-z)+?]+$/i;
  private patternOnlyLatLettersAndNumbers: any = /^[(a-z)+?]|\d+$/i;
  public charsCount: number = 2;
  public message: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.form = new FormGroup({
      firstNameAndLastName: new FormGroup({
        firstName: new FormControl('', [Validators.required, this.checkOnlyLatLetters.bind(this) /*Validators.pattern('^[(a-z A-Z)+?]+$')*/, this.checkLenght.bind(this) /*Validators.minLength(2)*/]),
        lastName: new FormControl('', [Validators.required, this.checkOnlyLatLetters.bind(this) /*Validators.pattern('^[(a-z A-Z)+?]+$')*/, this.checkLenght.bind(this) /*Validators.minLength(2)*/]),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl('', [Validators.required, this.checkOnlyLatLettersAndNumbers.bind(this)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[+][0-9]{11}')]),
      photo: new FormControl()
    });
  }

  //------- checkFunction

  checkOnlyLatLetters(control: FormControl) {
    if (this.patternOnlyLatLetters.test(control.value)) {
      return null;
    } else {
      return {
        'onlyLettersError': true
      }
    }
  }

  checkOnlyLatLettersAndNumbers(control: FormControl) {

    if (this.patternOnlyLatLettersAndNumbers.test(control.value)) {
      console.log(this.form.get('email').value);
      return null;
    } else {
      return {
        'onlyLettersAndNumbersError': true
      }
    }
  }

  checkLenght(control: FormControl) {
    if (control.value.length < this.charsCount) {
      return {
        'lengthError': true
      }
    } else {
      return null;
    }
  }

  //------- submit

  onSubmit() {
    let data = {
      parameters: {
        firstName: String(this.form.get('firstNameAndLastName.firstName').value),
        lastName: String(this.form.get('firstNameAndLastName.lastName').value),
      },
      email: String(this.form.get('email').value),
      company: String(this.form.get('company').value),
      phone: String(this.form.get('phone').value),
      photo: String(this.form.get('photo').value)
    }

    data.photo = data.photo.substr(data.photo.lastIndexOf("\\") + 1);


    this.httpService.postDataHttp(data).subscribe((answer) => {
      this.message = Object(answer).message;
    });

  }
}
