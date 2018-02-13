import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit {
  monthData: any;

  constructor(
    private router: ActivatedRoute,
    private ser: ServiceService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.ser.getList().subscribe((res: any) =>
        this.monthData = res.data.filter(sales => sales.salesMonth === params['month'])
      );
    });
  }

}
