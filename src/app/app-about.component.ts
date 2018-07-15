import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  template: `
      <weather *ngIf="id>0" [cityCode]=id></weather>
  `,
  styles: [``]
})
export class AppAboutComponent implements OnInit {
    id = 0

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
        console.log(params)
        this.id = params.id;
    }
  );
}

  ngOnInit() {
      this.http.get('http://weather.dev1/weather.php?command=location&woeid='+this.id).subscribe(data => {
          console.log(data);
      });
  }

}