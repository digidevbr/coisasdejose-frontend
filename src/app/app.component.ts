import { APIBase } from './config/config.api';
import { AppService } from './service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: any = '';

  constructor(private service: AppService){

  }

  ngOnInit(): void {
    this.service.getOtherFormat(APIBase, 'text').subscribe(title => {
      this.title = title;
    }, (err) => {
      console.log(err);
    })
  }
}
