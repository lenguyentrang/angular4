import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  template: `
  <div>
    app-about works!
  </div>
  `,
  styles: [``]
})
export class AppAboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://weather.dev1/weather.php?command=location&woeid=2344116').subscribe(data => {
          console.log(data);
      });
  }

}