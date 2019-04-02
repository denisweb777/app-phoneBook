import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-c3-get-children',
  templateUrl: './c3-get-children.component.html',
  styleUrls: ['./c3-get-children.component.scss']
})
export class C3GetChildrenComponent implements OnInit {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public company: string;
  public phone: string;
  public photoSrc: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.email = params['email'];
      this.company = params['company'];
      this.phone = params['phone'];
      this.photoSrc = '../../../assets/img/'+params['photo'];
    })
  }
}
