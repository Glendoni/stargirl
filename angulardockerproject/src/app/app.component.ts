import { Component, OnInit} from '@angular/core';
import { DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dataservice: DataService){}
  ngOnInit() {

    this.dataservice.getSomething().subscribe((data) => {
     // this.fields = data;

      console.log(data)
    });

  }
}
