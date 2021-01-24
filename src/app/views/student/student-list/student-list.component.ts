import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
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

    constructor(private userService: UserService, private router: Router) {
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource;
    displayedColumns = [
        'userId',
        'fullName'
    ];
    length: number;
    pageSize = 10;
    pageIndex = 0;
    pageSort = 'fullName';
    sortDirection = 'asc';
    pageSizeOptions = [5, 10, 25, 100];

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {

        // Talvez essa limpeza definindo como null não seja necessária.
        // this.dataSource = null;

        this.userService
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
                // console.log(response.content);
            });
    }

    changePage(event): void {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.getUsers();
    }

    changeSort(event): void {
        this.pageSort = event.active;
        this.sortDirection = event.direction;
        this.getUsers();
    }
}
