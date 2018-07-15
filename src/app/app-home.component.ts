import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  template: `
  <div>
    app-home works!
  </div>
  `,
  styles: [``]
})
export class AppHomeComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get('http://weather.dev1/weather.php?command=search&keyword=Istanbul').subscribe(data => {
            console.log(data);
        });
    }

}