import { Component, Input, OnInit } from '@angular/core';
import { PortfolioArticle } from '../portfolio-list';

@Component({
  selector: 'article-card',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: PortfolioArticle;
  constructor() { }

  ngOnInit(): void {
  }

  openArticleTab() {
    window.open(this.article.url, '_blank');
  }
}
