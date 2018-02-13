import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import * as c3 from 'c3';
import * as d3 from 'd3';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(
    private ser: ServiceService,
    private router: Router
  ) { }

  salesMonthData: Array<any>;
  salesUnitData: Array<any> = ['Sales Unit'];
  grapData: any;

  ngOnInit() {
    this.drawGrap();

  }

  drawGrap() {
    this.ser.getList().subscribe((res: any) => {
      this.grapData = res.data;
      this.salesMonthData = _.map(this.grapData, 'salesMonth');
      this.salesUnitData = _.concat(this.salesUnitData, _.map(this.grapData, 'salesUnit'));

      /* Bar chart */

      const chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            this.salesUnitData
          ],
          type: 'bar'
        },
        axis: {
          x: {
            type: 'category',
            categories: this.salesMonthData
          }
        }
      });
      const smData = this.salesMonthData;

      d3.selectAll('.c3-axis-x .tick').on('click', (index, value) => {
        this.router.navigate(['salesdetails/', smData[index]]);
      }).style('cursor', 'pointer');
    });
  }

}
