import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';
import { lineToken, lineHref } from '@ts/lineLogin';
import { LineResponse, JwtLineToken } from '@ts/interface';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  linehref: string;
  Acces_Token: LineResponse;
  constructor(private api: ApiService) { }
  ngOnInit() {
    let box = [], line = Object.keys(lineToken);
    box = line.map(item => `${item}=${lineToken[item]}`);
    this.linehref = lineHref.URL + box.join("&");
    this.api.LineLogin().subscribe(
      data => this.Acces_Token = data,
      err => console.log(err),
      () => console.log(`Acces_Token is Get!`, new JwtHelperService().decodeToken(this.Acces_Token.id_token) as JwtLineToken)
    );
  }
}
