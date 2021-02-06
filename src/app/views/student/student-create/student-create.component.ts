import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {CommonService} from '../../../services/common.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-student-create',
    templateUrl: './student-create.component.html',
    styleUrls: ['./student-create.component.css']
})

export class StudentCreateComponent implements OnInit {

    public studentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private commonService: CommonService,
        private router: Router
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
            role: [null, [Validators.required]],
            phone: [null, {disabled: true}],
            address: [null, {disabled: true}],
            otherInfo: [null, {disabled: true}],
        });
    }

    createStudent(): void {
        if (this.formIsValid()) {
            this.userService.create(this.studentForm.value)
                .subscribe(() => {
                    this.commonService.showMessage('Adicionado(a) com sucesso!');
                    this.router.navigate(['/']).then(() => {
                    });
                });
            this.studentForm.reset();
        } else {
            this.commonService.showMessage('Formulário incompleto!');
        }
    }

    formIsValid(): boolean {
        return this.studentForm.value.fullName !== null
            && this.studentForm.value.sex !== null
            && this.studentForm.value.birthDate !== null
            && this.studentForm.value.role !== null;
    }
}
