import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TangramDataService } from '../services/tangram-data.service';

@Component({
  selector: 'app-tangram-calendar',
  templateUrl: './tangram-calendar.component.html',
  styleUrls: ['./tangram-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TangramCalendarComponent implements OnInit {

  targetDateStr: string;
  hint: string[];
  solution: string[];
  showSolution: boolean;

  constructor(private tangramDataService: TangramDataService) { }

  ngOnInit(): void {
    this.showSolution = false;
    const targetDate = new Date();
    this.targetDateStr = targetDate.toISOString().substring(0, 10);
    this.tangramDataService.getHint(targetDate).subscribe(body => this.hint = body);
    this.tangramDataService.getSolution(targetDate).subscribe(body => this.solution = body);
  }
}
