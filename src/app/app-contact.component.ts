import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
    template: `
        <div *ngFor = "let city of results">
        <weather  *ngIf="city.woeid>0" [cityCode]=city.woeid></weather>
        </div>
    `,
    styles: [``]
})
export class AppContactComponent implements OnInit {
    keyword = ''
    results=[]

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        this.route.params.subscribe( params => {
                console.log(params)
                this.keyword = params.keyword;
            }
        );
    }

    ngOnInit() {
        this.http.get('http://weather.dev1/weather.php?command=search&keyword='+this.keyword).subscribe(data => {
            console.log(data);
            this.results = data;


        });
    }

}