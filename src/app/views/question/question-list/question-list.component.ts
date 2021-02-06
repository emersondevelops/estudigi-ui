import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

    constructor(private questionService: QuestionService) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = [
        'id',
        'subject',
        'grade',
        'topic',
        'title'
    ];
    length = null;
    pageSize = 5;
    pageIndex = 0;
    pageSort = 'id';
    sortDirection = 'asc';
    pageSizeOptions = [5, 10, 25, 100];

    ngOnInit(): void {
        this.questionService
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

        // Talvez essa limpeza definindo como null não seja necessária.
        // this.dataSource = null;

        this.questionService
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
