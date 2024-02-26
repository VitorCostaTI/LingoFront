import { AfterViewInit, Component, ViewChild }              from '@angular/core';
import { SortServiceService } from './modules/services/SortService/sort-service.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{ 

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sortService: SortServiceService) {}

  ngAfterViewInit() {
    this.sortService.setSort(this.sort);
  }
}