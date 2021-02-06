import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommonService} from '../../services/common.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private commonService: CommonService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: [null, {disabled: true}],
            password: [null, {disabled: true}]
        });
    }

    // createStudent(): void {
    //     if (this.formIsValid()) {
    //         this.userService.create(this.loginForm.value)
    //             .subscribe(() => {
    //                 this.commonService.showMessage('Adicionado(a) com sucesso!');
    //                 this.router.navigate(['/']).then(() => {
    //                 });
    //             });
    //         this.loginForm.reset();
    //     } else {
    //         this.commonService.showMessage('Formulário incompleto!');
    //     }
    // }

    formIsValid(): boolean {
        return this.loginForm.value.username !== null
            && this.loginForm.value.password !== null;
    }

    login(): void {
        this.router.navigate(['/dashboard']).then(() => {
        });
    }
}
