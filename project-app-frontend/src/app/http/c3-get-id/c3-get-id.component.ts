import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-c3-get-id',
  templateUrl: './c3-get-id.component.html',
  styleUrls: ['./c3-get-id.component.scss']
})
export class C3GetIdComponent implements OnInit {

  public person:Object;

  public id: string;
  public firstName: string;
  public lastName:string;
  public email: string;
  public company: string;
  public phone: String;
  public photoSrc: String;
  
  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];

    this.httpService.getDataIdHttp(this.id).subscribe((data) => {

      this.person = Object(data[0]);

      this.firstName = String(this.person['parameters'].firstName);
      this.lastName = String(this.person['parameters'].lastName);
      this.email = String(this.person['email']);
      this.company = String(this.person['company']);
      this.phone = String(this.person['phone']);
      this.photoSrc = String('../../../assets/img/'+this.person['photo']);
    })
  }
}
