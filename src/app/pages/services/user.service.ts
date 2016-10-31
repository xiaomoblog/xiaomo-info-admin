import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {getUserApi} from "../../../api.config";

@Injectable()
export class UserService {

  constructor(public http: Http) {
  }

  login(userName, password) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify({userName: userName, password: password});
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(getUserApi, body, options)
      .map(res => res.json());
  }

}
