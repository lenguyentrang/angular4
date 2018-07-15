import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'weatherdetail',
  templateUrl: './weatherdetail.component.html',
  styleUrls: ['./weatherdetail.component.css']
})
export class WeatherdetailComponent implements OnInit {
    results = [];
    title = '';
    @Input() cityCode: String;


    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.http.get('http://weather.dev1/weather.php?command=location&woeid='+this.cityCode).subscribe(data => {
            this.results = data.consolidated_weather;
            this.title = data.title;
        });
    }

}
