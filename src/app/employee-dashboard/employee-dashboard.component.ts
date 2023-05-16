import { OnInit, Component, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../service/api.service';




@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})


export class EmployeeDashboardComponent implements OnInit {
  displayedColumns: string[] = ['Employee ID', 'FullName', 'Email ID', 'Mobile No.','Gender','Salary', 'Joining Date'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  getemployeetable: any;

   
  constructor(private _router:Router, private api:ApiService){}
  ngOnInit(): void {
    this.getemployeetable();

  }

  AddEmployee(){
    this._router.navigate(['addemployee']);
    this.api.getEmployee().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
        },
        error:(err)=>
        {
          alert("error while fetching records")
        }
    })
  }



     // this.dataSource = new MatTableDataSource(res);
      //this.dataSource.paginator =  this.paginator;
      //this.dataSource.sort = this.sort

      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    }
