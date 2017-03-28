import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'loading...';

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get('api/demo').subscribe(data => this.title = 'Backend says: ' + data.text());
    }
}
