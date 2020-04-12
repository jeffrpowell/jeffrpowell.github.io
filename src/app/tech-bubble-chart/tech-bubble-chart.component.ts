import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { ZoomView, ZoomInterpolator } from 'd3';

@Component({
  selector: 'tech-bubble-chart',
  templateUrl: './tech-bubble-chart.component.html',
  styleUrls: ['./tech-bubble-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechBubbleChartComponent implements OnInit {
  // @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    let height = 500;
    let width = 500;
    let radius = 6;
    let step = radius * 2;
    let theta = Math.PI * (3 - Math.sqrt(5));
    let data = Array.from({ length: 2000 }, (_, i) => {
      const r = step * Math.sqrt((i += 0.5)),
        a = theta * i;
      return [width / 2 + r * Math.cos(a), height / 2 + r * Math.sin(a)];
    });
    let currentTransform: ZoomView = [width / 2, height / 2, height];

    const svg = d3
      .select('#techBubbleChartSVG')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0, 0, ${width}, ${height}`);

    const g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', ([x]) => x)
      .attr('cy', ([, y]) => y)
      .attr('r', radius)
      .attr('fill', (d, i) => d3.interpolateRainbow(i / 360));

    function transition() {
      const d = data[Math.floor(Math.random() * data.length)];
      const i: ZoomInterpolator = d3.interpolateZoom(currentTransform, [...d, radius * 2 + 1] as ZoomView);

      g.transition()
        .delay(250)
        .duration(i.duration)
        .attrTween('transform', () => t => transform((currentTransform = i(t))))
        .on('end', transition);
    }

    function transform([x, y, r]: ZoomView) {
      return `
        translate(${width / 2}, ${height / 2})
        scale(${height / r})
        translate(${-x}, ${-y})
      `;
    }
    svg.call(transition).node();
  }
}
