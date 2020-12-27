import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {Router} from '@angular/router';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource;
  displayedColumns = [
    'name',
    'year',
    'className'
  ];
  length: number;
  pageSize = 10;
  pageIndex = 0;
  pageSort = '';
  sortDirection = 'desc';
  pageSizeOptions = [5, 10, 25, 100];

  ngOnInit(): void {
    this.studentService
      .read(
        this.pageSize,
        this.pageIndex,
        this.pageSort,
        this.sortDirection
      )
      .subscribe((results) => {
        this.dataSource = new MatTableDataSource(results.content);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.length = results.totalElements;
        // console.log(results.content);
      });
  }

  changePage(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.newQuery();
  }

  changeSort(event) {
    this.pageSort = event.active;
    this.sortDirection = event.direction;
    this.newQuery();
  }

  newQuery() {
    this.studentService
      .read(
        this.pageSize,
        this.pageIndex,
        this.pageSort,
        this.sortDirection
      )
      .subscribe((results) => {
        return (this.dataSource = new MatTableDataSource(
          results.content
        ));
      });
  }

  reloadList() {
    this.dataSource = null;
    this.newQuery();
  }

}
