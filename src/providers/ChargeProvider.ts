import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChargeProvider {
  BASE_URL:any = "https://bongloy-demo-laravel.herokuapp.com/"
  constructor(public http: Http){}

  Charge(token, amount){

    let body = {
      'token': token,
      'amount': amount,
      'currency': 'USD'
    };

    return this.http.post(this.BASE_URL+"charge", body)
      .map(
          (response:Response) => {
              const data = response.json();
              return data;
          }
      ).catch(this.handleError);
  }

  handleError(error) {
      return Observable.throw(error.json().error || 'Server error');
  }
}
