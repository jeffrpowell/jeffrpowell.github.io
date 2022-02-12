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

  openVideoUrl() {
    window.open(this.makeYoutubeUrl(this.video.id), '_blank');
  }

  private makeYoutubeUrl(id: string) : string {
    return "https://www.youtube.com/watch?v=" + id;
  }
}
