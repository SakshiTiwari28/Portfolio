import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['Javascript', 'HTML', 'Angular', 'Java', 'NodeJS', 'MySql', 'Docker', 'Git'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartData = [{
    data: [65, 59, 80, 81, 56, 70, 80, 70],
    backgroundColor: [
        'teal', 'cornflowerblue', 'teal', 'cornflowerblue', 'teal', 'cornflowerblue', 'teal', 'cornflowerblue'
      ],
    },

  ];

  ngOnInit() {
  }

}
