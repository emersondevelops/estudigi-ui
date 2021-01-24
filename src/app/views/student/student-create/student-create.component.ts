import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-student-create',
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css']
})

export class StudentCreateComponent implements OnInit {

    public studentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.studentForm = this.fb.group({
            fullName: [null, [Validators.required]],
            sex: [null, [Validators.required]],
            birthDate: [null, [Validators.required]],
            email: [null, {disabled: true}],
            login: [null, {disabled: true}],
            password: [null, {disabled: true}],
            role: ['STUDENT', [Validators.required]],
            phone: [null, {disabled: true}],
            address: [null, {disabled: true}],
            otherInfo: [null, {disabled: true}],
        });
    }

    createStudent(): void {
        this.userService.create(this.studentForm.value)
            .subscribe(response => {});
        this.studentForm.reset();
    }
}
