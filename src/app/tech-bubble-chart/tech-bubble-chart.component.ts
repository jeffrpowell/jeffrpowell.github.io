import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import { ZoomView, ZoomInterpolator, PackLayout, HierarchyCircularNode, ScaleLinear, Transition } from 'd3';
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
    const dataRoot: HierarchyCircularNode<any> = pack(data);
    const rootTransform: ZoomView = [dataRoot.x, dataRoot.y, dataRoot.r * 2 + 1];
    let currentNode: HierarchyCircularNode<any> = dataRoot;
    let currentTransform: ZoomView = rootTransform;

    const svg = d3
      .select('#techBubbleChartSVG')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0, 0, ${width}, ${height}`)
      .on('mousedown', zoomToFullView);

    const circleSVGGroup = svg
      .append('g')
      .selectAll('circle')
      .data(dataRoot.descendants().slice(1))
      .join('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.r)
      .attr('fill', (d, i) => (d.children ? '#C4E697' : 'white'))
      .attr('pointer-events', d => (!d.children ? 'none' : null))
      .on('mouseover', function() {
        d3.select(this).attr('stroke', '#000');
      })
      .on('mouseout', function() {
        d3.select(this).attr('stroke', null);
      })
      .on('mousedown', function(d: HierarchyCircularNode<any>) {
        d3.event.stopPropagation(); //prevent triggering click on svg
        d3.select(this).attr('stroke', null);
        zoomToCircleCenter(d);
      });

    const labelSVGGroup = svg
      .append('g')
      .style('font', '10px sans-serif')
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(dataRoot.descendants())
      .join('text')
      .style('fill-opacity', d => (d.parent === dataRoot ? 1 : 0))
      .style('display', d => (d.parent === dataRoot ? 'inline' : 'none'))
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .text(d => d.data.name);

    zoomToFullView();

    function pack(data: any): HierarchyCircularNode<any> {
      return d3
        .pack()
        .size([width, height])
        .padding(3)(
        d3
          .hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value)
      );
    }

    function zoomToCircleCenter(d: HierarchyCircularNode<any>) {
      currentNode = d;
      const interpolator: ZoomInterpolator = d3.interpolateZoom(currentTransform, [d.x, d.y, d.r * 2 + 1] as ZoomView);
      runTransition(interpolator);
    }

    function zoomToFullView() {
      const interpolator: ZoomInterpolator = d3.interpolateZoom(currentTransform, rootTransform);
      runTransition(interpolator);
    }

    function runTransition(interpolator: ZoomInterpolator) {
      circleSVGGroup
        .transition()
        .duration(interpolator.duration)
        .attrTween('transform', () => t => transform((currentTransform = interpolator(t))));
      const labelTransition: Transition<any, HierarchyCircularNode<any>, SVGGElement, any> = labelSVGGroup
        .transition()
        .duration(interpolator.duration)
        .attrTween('transform', () => t => transform((currentTransform = interpolator(t))));
      // labelSVGGroup
      //   .filter(function(d) { return d.parent === currentNode || this.style.display === "inline"; })
      //   .transition(labelTransition)
      //     .style("fill-opacity", d => d.currentNode === focus ? 1 : 0)
      //     .on("start", function(d) { if (d.currentNode === focus) this.style.display = "inline"; })
      //     .on("end", function(d) { if (d.currentNode !== focus) this.style.display = "none"; });
    }

    function transform([x, y, r]: ZoomView) {
      return `
        translate(${width / 2}, ${height / 2})
        scale(${height / r})
        translate(${-x}, ${-y})
      `;
    }

    // zoomTo(rootTransform);

    // function zoomTo(v: ZoomView) {
    //   const k = width / v[2];

    //   currentTransform = v;

    //   label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    //   node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    //   node.attr("r", d => d.r * k);
    // }

    // function zoom(d) {
    //   const focus0 = focus;

    //   focus = d;

    //   const transition = svg.transition()
    //       .duration(d3.event.altKey ? 7500 : 750)
    //       .tween("zoom", d => {
    //         const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
    //         return t => zoomTo(i(t));
    //       });

    //   label
    //     .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
    //     .transition(transition)
    //       .style("fill-opacity", d => d.parent === focus ? 1 : 0)
    //       .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
    //       .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    // }
  }
}
