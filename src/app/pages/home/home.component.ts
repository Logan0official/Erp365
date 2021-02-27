import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  company: object;
  address: object;
  orders: number;
  balance: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Receive payment' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Receive payment' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Create invoice' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Create invoice' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Send reminder' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Create invoice' },
  { company: { nameOne: 'ONEOK', nameTwo: 'ONEOK Inc. Tulsa OK' }, address: { nameOne: '100 Main Str', nameTwo: 'Tulsa OK 74103' }, orders: 28, balance: '$32,600.83', action: 'Email invoice' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['checkbox', 'company', 'address', 'orders', 'balance', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSources = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
