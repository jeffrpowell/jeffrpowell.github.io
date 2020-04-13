import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import { ZoomView, ZoomInterpolator } from 'd3';
import { KnownTech } from '../tech/tech';

//https://observablehq.com/@d3/zoomable-circle-packing
//https://observablehq.com/@d3/smooth-zooming
@Component({
  selector: 'tech-bubble-chart',
  templateUrl: './tech-bubble-chart.component.html',
  styleUrls: ['./tech-bubble-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TechBubbleChartComponent implements OnInit {
  private svg: any;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set data(data: KnownTech) {
    let height = 500;
    let width = 600;
    let radius = 16;
    let step = radius * 2;
    let theta = Math.PI * (3 - Math.sqrt(5));
    let circleData = Array.from({ length: 2000 }, (_, i) => {
      const r = step * Math.sqrt((i += 0.5)),
        a = theta * i;
      return [width / 2 + r * Math.cos(a), height / 2 + r * Math.sin(a)];
    });
    const rootTransform: ZoomView = [width / 2, height / 2, height];
    let currentTransform: ZoomView = rootTransform;

    const svg = d3
      .select('#techBubbleChartSVG')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0, 0, ${width}, ${height}`)
      .on('mousedown', zoomToFullView);

    const g = svg.append('g');

    g.selectAll('circle')
      .data(circleData)
      .join('circle')
      .attr('cx', ([x]) => x)
      .attr('cy', ([, y]) => y)
      .attr('r', radius)
      .attr('fill', (d, i) => d3.interpolateRainbow(i / 360))
      .on('mouseover', function() {
        d3.select(this).attr('stroke', '#000');
      })
      .on('mouseout', function() {
        d3.select(this).attr('stroke', null);
      })
      .on('mousedown', function() {
        d3.event.stopPropagation(); //prevent triggering click on svg
        d3.select(this).attr('stroke', null);
        zoomToCircleCenter([d3.select(this).attr('cx'), d3.select(this).attr('cy')]);
      });

    function zoomToCircleCenter(d: string[]) {
      const interpolator: ZoomInterpolator = d3.interpolateZoom(currentTransform, [...d, radius * 2 + 1] as ZoomView);
      runTransition(interpolator);
    }

    function zoomToFullView() {
      const interpolator: ZoomInterpolator = d3.interpolateZoom(currentTransform, rootTransform);
      runTransition(interpolator);
    }

    function runTransition(interpolator: ZoomInterpolator) {
      g.transition()
        .duration(interpolator.duration)
        .attrTween('transform', () => t => transform((currentTransform = interpolator(t))));
    }

    function transform([x, y, r]: ZoomView) {
      return `
        translate(${width / 2}, ${height / 2})
        scale(${height / r})
        translate(${-x}, ${-y})
      `;
    }
  }
}
