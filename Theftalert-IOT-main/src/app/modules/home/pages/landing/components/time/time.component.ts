import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, AfterViewInit{
  h:any;
  m:any;
  s:any;
  session:any;
  time:any;
  deg:number = 6;

  constructor(
  ){}
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.showTime();
  }


   showTime() {
    let date = new Date();
    this.h = date.getHours(); // 0 - 23
    this.m = date.getMinutes(); // 0 - 59
    this.s = date.getSeconds(); // 0 - 59

    this.h = (this.h < 10) ? "0" + this.h : this.h;
    this.m = (this.m < 10) ? "0" + this.m : this.m;
    this.s = (this.s < 10) ? "0" + this.s : this.s;

    let time = this.h + ":" + this.m + ":" + this.s ;
    this.time=  time
    setTimeout(() => {
      this.showTime();
    }, 1000);
  }
}
