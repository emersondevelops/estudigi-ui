import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../../services/student.service';

@Component({
    selector: 'app-student-create',
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css']
})

export class StudentCreateComponent implements OnInit {

    public studentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private studentService: StudentService
    ) {
    }


    ngOnInit(): void {
        this.studentForm = this.fb.group({
            name: ['', [Validators.required]],
            sex: ['', [Validators.required]],
            birthDate: ['', {disabled: true}],
            email: ['', [Validators.required]],
            year: ['', [Validators.required]],
            className: ['', [Validators.required]]
        });
    }

    createStudent(): void {
        this.studentService.create(this.studentForm.value)
            .subscribe(response => {});
        this.studentForm.reset();
    }
}
