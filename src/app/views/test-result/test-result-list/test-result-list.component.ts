import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {TestResultService} from '../test-result.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-result-list',
  templateUrl: './test-result-list.component.html',
  styleUrls: ['./test-result-list.component.css']
})
export class TestResultListComponent implements OnInit {

    constructor(private testResultService: TestResultService,
                private activatedRoute: ActivatedRoute) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = [
        'id',
        'test_name',
        'full_name',
        'trial',
        'score',
        'sent_at',
        'teacher_comment',
    ];
    length = null;
    pageSize = 5;
    pageIndex = 0;
    pageSort = 'id';
    sortDirection = 'asc';
    pageSizeOptions = [5, 10, 25, 100];
    testId = this.activatedRoute.snapshot.paramMap.get('testId');

    ngOnInit(): void {
        this.testResultService
            .readByTestId(
                this.pageSize,
                this.pageIndex,
                this.pageSort,
                this.sortDirection,
                this.testId
            )
            .subscribe((response) => {
                this.dataSource = new MatTableDataSource(response.content);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.length = response.totalElements;
            });
    }

    getAll(): void {
        this.testResultService
            .readByTestId(
                this.pageSize,
                this.pageIndex,
                this.pageSort,
                this.sortDirection,
                this.testId
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
