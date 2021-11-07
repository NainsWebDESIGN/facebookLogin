import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';
import { facebookToken, facebookHref } from '@ts/FacebookLogin';
import { FacebookResponse, JwtFacebookToken } from '@ts/interface';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Facebookhref: string;
  Acces_Token: FacebookResponse;
  constructor(private api: ApiService) { }
  ngOnInit() {
    let box = [], Facebook = Object.keys(facebookToken);
    box = Facebook.map(item => `${item}=${facebookToken[item]}`);
    this.Facebookhref = facebookHref.URL + box.join("&");
    console.log(this.Facebookhref);
    // this.api.FacebookLogin().subscribe(
    //   data => this.Acces_Token = data,
    //   err => console.log(err),
    //   () => console.log(`Acces_Token is Get!`, new JwtHelperService().decodeToken(this.Acces_Token.id_token) as JwtFacebookToken)
    // );
  }
}
