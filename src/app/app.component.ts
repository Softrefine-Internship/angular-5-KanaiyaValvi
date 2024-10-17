import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { filter, map, Observable, reduce, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counterArray!: number[];

  constructor(private appservice: AppService) {}
  ngOnInit(): void {
    const custObd = this.appservice.onChange();
    custObd
      .pipe(
        map((newArray) => newArray.map((item: number) => item * 2)),
        map((newArray) => newArray.filter((item: number) => item % 2 === 0)),
        map((newArray) => newArray.reduce((a, b) => a + b))
      )
      .subscribe((data: any) => console.log(data));
  }
}
