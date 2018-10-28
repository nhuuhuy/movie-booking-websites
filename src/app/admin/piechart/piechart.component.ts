import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {
  results = [
    { name: 'Revenue', value: 8940 },
    { name: 'Income', value: 5000 },
    { name: 'Outcome', value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
  gradient =  true;
  showXAxis = true;
  showYAxis = true;
  view = [];
  colorScheme = {
    domain: [ '#9046dd', '#db1623', '#b3328d']
  };

  constructor() { }

  ngOnInit() {
  }

}
