import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {StudentService} from '../student.service';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    constructor(private studentService: StudentService) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = [
        'id',
        'full_name'
    ];
    length = null;
    pageSize = 5;
    pageIndex = 0;
    pageSort = 'full_name';
    sortDirection = 'asc';
    pageSizeOptions = [5, 10, 25, 100];

    ngOnInit(): void {
        this.studentService
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

    getStudents(): void {

        // Talvez essa limpeza definindo como null não seja necessária.
        // this.dataSource = null;

        this.studentService
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
        this.getStudents();
    }

    changeSort(event): void {
        this.pageSort = event.active;
        this.sortDirection = event.direction;
        this.getStudents();
    }
}
