import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tangram-calendar',
  templateUrl: './tangram-calendar.component.html',
  styleUrls: ['./tangram-calendar.component.scss']
})
export class TangramCalendarComponent implements OnInit {

  targetDateStr: string;

  constructor() { }

  ngOnInit(): void {
    const targetDate = new Date();
    this.targetDateStr = targetDate.toISOString().substring(0, 10);
  }
}
