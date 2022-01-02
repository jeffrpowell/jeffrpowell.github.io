import { Component, Input, OnInit } from '@angular/core';
import { PortfolioRepo } from '../portfolio-list';

@Component({
  selector: 'repo-card',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() repo: PortfolioRepo;
  constructor() { }

  ngOnInit(): void {
  }

}