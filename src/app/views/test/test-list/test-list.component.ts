import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TestService} from '../test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

    constructor(private testService: TestService) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = [
        'id',
        'name',
        'class_groups',
        'question_value',
        'repeat_times',
        'created_by'
    ];
    length = null;
    pageSize = 5;
    pageIndex = 0;
    pageSort = 'id';
    sortDirection = 'asc';
    pageSizeOptions = [5, 10, 25, 100];

    ngOnInit(): void {
        this.testService
            .read(
                this.pageSize,
                this.pageIndex,
                this.pageSort,
                this.sortDirection
            )
            .subscribe((response) => {
                this.dataSource = new MatTableDataSource(response.content);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.length = response.totalElements;
            });
    }

    getAll(): void {
        this.testService
            .read(
                this.pageSize,
                this.pageIndex,
                this.pageSort,
                this.sortDirection
            )
            .subscribe((response) => {
                this.dataSource = new MatTableDataSource(response.content);
            });
    }

    changePage(event): void {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.getAll();
    }

    changeSort(event): void {
        this.pageSort = event.active;
        this.sortDirection = event.direction;
        this.getAll();
    }

}
