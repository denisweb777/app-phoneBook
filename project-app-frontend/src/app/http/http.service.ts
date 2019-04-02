import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  //GET
  getDataHttp() {
    return this.http.get("/api/http/path1");
  }

  //GET(ID)
  getDataIdHttp(id) {
    return this.http.get(`/api/http/path1/${id}`);
  }

  //GET(LOGIN)
  getDataLoginHttp(firstNameAndLastName) {
    return this.http.get(`/api/http/path3/${firstNameAndLastName}`);
  }

  //POST
  postDataHttp(data) {
    return this.http.post("/api/http/path2", data);
  }

  //PUT(ID)
  putDataHttp(id, dataPut) {
    return this.http.put(`/api/http/path4/${id}`,dataPut);
  }

  //DELETE(ID)
  deleteDataHttp(id) {
    return this.http.delete(`/api/http/path5/${id}`);
  }
}


