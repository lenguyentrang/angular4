import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@declare window;
@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    weatherData = {
        title: '',
        the_temp: '',
        min_temp: '',
        max_temp: ''

    };
    @Input() cityCode: String;


    constructor(private http: HttpClient) {

    }

  ngOnInit() {
      this.http.get('http://weather.dev1/weather.php?command=location&woeid='+this.cityCode).subscribe(data => {
          // this.weatherData = data;
          var displayData = {
              title: data.title,
              the_temp: data.consolidated_weather[0].the_temp,
              min_temp: data.consolidated_weather[0].min_temp,
              max_temp: data.consolidated_weather[0].max_temp
          }
          this.weatherData = displayData;
          console.log(displayData);
          window.abc = data;
      });
  }

}
