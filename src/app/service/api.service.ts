import { Injectable } from '@angular/core';
import { facebookHref, postFacebook } from '@ts/FacebookLogin';
import { FacebookResponse } from '@ts/interface';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) { }
    FacebookLogin(): Observable<any> {
        let loginStatus = [];
        location.search.split("&").forEach(item => {
            let data = item.split("=");
            loginStatus.push({ key: data[0], value: data[1] });
        })
        let index = loginStatus.findIndex(el => el.key == "?code");

        switch (index) {
            case -1:
                return Observable.throw("Not Login!");
            default:
                const header = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };
                postFacebook.code = loginStatus[index].value;
                let data = this.PostXform(postFacebook);

                return this.http.post(facebookHref.API, data.toString(), header).map(
                    (data: HttpResponse<FacebookResponse>) => data,
                    (err: HttpErrorResponse) => Observable.throw(err)
                )
        }
    }

    private PostXform(obj: any) {
        let key = Object.keys(obj), data = new URLSearchParams();
        key.forEach(item => data.set(item, obj[item]));
        return data;
    }

    private PostForm(obj: any) {
        let key = Object.keys(obj), data = new FormData();
        key.forEach(item => data.append(item, obj[item]));
        return data;
    }
}
