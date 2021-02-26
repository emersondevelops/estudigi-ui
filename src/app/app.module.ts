import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {StudentListComponent} from './views/student/student-list/student-list.component';
import {MatButtonModule} from '@angular/material/button';
import {StudentCreateComponent} from './views/student/student-create/student-create.component';
import {NavComponent} from './components/nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {HttpInterceptorBasicAuthService} from './services/http-interceptor-basic-auth.service';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { QuestionListComponent } from './views/question/question-list/question-list.component';
import { TestListComponent } from './views/test/test-list/test-list.component';
import { TestResultListComponent } from './views/test-result/test-result-list/test-result-list.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentListComponent,
        StudentCreateComponent,
        NavComponent,
        LoginComponent,
        DashboardComponent,
        QuestionListComponent,
        TestListComponent,
        TestResultListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: LoginComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'student/list', component: StudentListComponent},
            {path: 'student/create', component: StudentCreateComponent},
            {path: 'question/list', component: QuestionListComponent},
            {path: 'test/list', component: TestListComponent},
            {path: 'test-result/by-test-id/:testId', component: TestResultListComponent},
        ]),
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatSelectModule,
        MatRadioModule,
        MatTooltipModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
