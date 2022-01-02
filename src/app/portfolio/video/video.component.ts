import { Component, Input, OnInit } from '@angular/core';
import { PortfolioVideo } from '../portfolio-list';

@Component({
  selector: 'video-card',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: PortfolioVideo;

  constructor() { }

  ngOnInit(): void { }

  getThumbnailUrl(): string {
    return "https://img.youtube.com/vi/" + this.video.id + "/hqdefault.jpg";
  }

  openVideoPage() {

  }
}
