import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private snackBar: MatSnackBar) {
    }

    showMessage(msg: string): void {
        this.snackBar.open(msg, '', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: ['msg-success'],
        });
    }
}
