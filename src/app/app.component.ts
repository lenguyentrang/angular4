import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <div class="header"><h2>Welcome to {{title}}</h2></div>
    <div>
        <form #search = "ngForm" (ngSubmit) = "onClickSubmit(search.value)" >
            <input type = "text" name = "keyword" placeholder = "keyword Seach" ngModel>
            <br/>
            <input type = "submit" value = "Search">
        </form>
    </div>

    <ul>
      <li><h2><a routerLink="/home">Home</a></h2></li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [`
  .header { text-align:center; margin:15px 0px; }
  ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333; }
  li { float: left; }
  li a { display: block; color: white; text-align: center; padding: 15px; text-decoration: none; }
  li a:hover { background-color: #111; }
  `]
})
export class AppComponent {
  title = 'Angular 4 Routing App';

    keyword;
    formdata;
    constructor(private router: Router) {}
    ngOnInit() {
        this.formdata = new FormGroup({
            keyword: new FormControl("angular@gmail.com"),
        });
    }

    onClickSubmit(data) {
        alert("Entered Email id : " + data.keyword);
        this.router.navigate(['/search/'+data.keyword])
    }
}