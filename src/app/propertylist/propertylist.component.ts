import { Component, OnInit, ViewChild } from '@angular/core';
//import {MatPaginator} from '@angular/material/paginator';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { PropertyModel } from '../shared/models/property.model';
import { PropertyService } from '../service/property.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
declare function require(url: string);


@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {

  data: any = require("../../assets/data/data.json");

  constructor(private proprtyService: PropertyService) { }

  displayedColumns: string[] = ['MainPhoto', 'DisplayAddress', 'Price', 'BedsString', 'BathString', 'GroupLogoUrl', 'action'];
  proprtyList: PropertyModel[] = [];
  dataSource :any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {   
   
    this.getProperyList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  getProperyList() {
    this.proprtyService.getPropertyList().then(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
    })
  }

  onDelete(id: any): any {
    this.proprtyService.deleteProperty(id).then(data => {
      this.getProperyList();
    })
  }


}


