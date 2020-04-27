import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';
import { ZoomView, ZoomInterpolator, PackLayout, HierarchyCircularNode, ScaleLinear, Transition } from 'd3';
import { KnownTech } from '../tech/tech';
import { COLORS } from '../../colors';

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
      .attr('preserveAspectRatio', 'none')
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
      .attr('fill', (d, i) => (d.children ? COLORS.medium : COLORS.light))
      .attr('pointer-events', d => (!d.children ? 'none' : null))
      .on('mouseover', function() {
        d3.select(this).attr('stroke', COLORS["dark-border"]);
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
      .attr('pointer-events', 'none')
      .attr('text-anchor', 'middle')
      .selectAll('text')
      .data(dataRoot.descendants())
      .join('text')
      .style('fill-opacity', d => (d.parent === currentNode ? 1 : 0))
      .style('display', d => (d.parent === currentNode ? 'inline' : 'none'))
      .style('font-size', d => (1 / (2 * d.depth)) + "rem")
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .html(d => generateLabelSVGText(d.data.name, d.x));
    
    //small tweak to make category labels more readable
    labelSVGGroup
      .filter(d => d.parent == dataRoot)
      .style('font-weight', "bold");

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

    function generateLabelSVGText(rawLabel: string, x: number) : string {
      if (rawLabel.indexOf(' ') < 0) {
        return rawLabel;
      }
      const regex: RegExp = new RegExp('[^ ]+(?: &)?', 'g');
      let matchArray;
      let firstMatch: boolean = true;
      let finalString: string;
      while ((matchArray = regex.exec(rawLabel)) !== null) {
        if (firstMatch) {
          finalString = "<tspan x='"+x+"' dy='-0.5em'>"+matchArray[0]+"</tspan>";
          firstMatch = false;
        } else {
          finalString += "<tspan x='"+x+"' dy='1.25em'>"+matchArray[0]+"</tspan>"
        }
      }
      return finalString;
    }

    function zoomToCircleCenter(d: HierarchyCircularNode<any>) {
      currentNode = d;
      const interpolator: ZoomInterpolator = d3.interpolateZoom(currentTransform, [d.x, d.y, d.r * 2 + 1] as ZoomView);
      runTransition(interpolator);
    }

    function zoomToFullView() {
      currentNode = dataRoot;
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
      labelSVGGroup
        .filter(function(d) {
          return d.parent === currentNode || (this as SVGTextElement).style.display === 'inline';
        })
        .transition(labelTransition)
        .style("fill-opacity", d => d.parent === currentNode ? 1 : 0)
        .style("display", d => (d.parent === currentNode ? 'inline' : 'none'))
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
