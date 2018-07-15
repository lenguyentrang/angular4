import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  template: `
  <weather [cityCode]="2344116"></weather>
  <weather [cityCode]="638242"></weather>
  <weather [cityCode]="44418"></weather>
  <weather [cityCode]="565346"></weather>
  <weather [cityCode]="560743"></weather>
  <weather [cityCode]="9807"></weather>
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