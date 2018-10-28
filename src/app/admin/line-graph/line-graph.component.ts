import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
  multi = [
    {
      name: 'Doanh Thu',
      series: [
        {
          name: 'Th2',
          value: 7300
        },
        {
          name: 'Th3',
          value: 8940
        },
        {
          name: 'Th4',
          value: 7870
        },
        {
          name: 'Th5',
          value: 8270
        },
        {
          name: 'Th6',
          value: 9002
        },
        {
          name: 'Th7',
          value: 9800
        },
        {
          name: 'CN',
          value: 8800
        }
      ]
    }
  ];
  highlights = [...this.multi];
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Doanh thu trong tuần';
  showYAxisLabel = true;
  yAxisLabel = 'Số tiền (VNĐ)';
  autoScale = true;
  useGradient = false;
  curve = d3.curveCatmullRom.alpha(0.2);
  showRefLines = true;
  showRefLabels = true;
  view = [];
  schemeType = 'linear';
  rangeFillOpacity = 0.4;
  showGridLines = false;
  yScaleMin = 5000;
  colorScheme = {
    domain: ['#9046dd']
  };
  constructor() {}
  onActivateAndDeactivate() {

  }

  ngOnInit() {}
}
