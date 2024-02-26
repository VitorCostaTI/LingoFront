import { Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class SortServiceService {

  private sort!: MatSort;

  setSort(sort: MatSort) {
    this.sort = sort;
  }

  getSort(): MatSort {
    return this.sort;
  }}
