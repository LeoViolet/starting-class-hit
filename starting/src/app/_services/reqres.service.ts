import { IReqres } from './../_share/interfaces/reqres';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
  private readonly reqresURL = "https://reqres.in/api/users?page";
  private readonly reqresKEY = environment.reqresKey;
  constructor(private http: HttpClient) { }

  getDataReqresByGet = () => {
    return this.http.get<IReqres>(this.reqresURL+'=2&'+'api_key='+this.reqresKEY);
  };
  getDataReqresPageByPost = (page: number ) => {
    const headers = new HttpHeaders().set("x-api-key", this.reqresKEY);
    const localUrlPage = this.reqresURL + `=${page}`;
    return this.http.get(localUrlPage, {headers});
  }
}
