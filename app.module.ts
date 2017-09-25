import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //TODO: Remove This
import { HttpClientModule } from '@angular/common/http';
import { ToastyModule } from 'ng2-toasty';
import { Ng2CompleterModule } from "ng2-completer";
import { NgxPaginationModule } from 'ngx-pagination';
import './rxjs-extensions';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PermissionGroupComponent } from './groups/permission-group.component'
import { PermissionGroupEditComponent } from './groups/permission-group-edit.component'
import { PermissionGroupService } from './groups/permission-group.service'
import { PermissionGroupFilterPipe } from './groups/permission-group-filter.pipe'
import { PermissionReportFilterPipe } from './admin/permission-report.pipe'
import { PermissionReportSAFilterPipe } from './admin/permission-report-sa.pipe'
import { PermissionReportEmailFilterPipe } from './admin/permission-report-email.pipe'

import { AuthorizedManagerComponent } from './groupManager/authorized-manager.component'
import { AuthorizedManagerService } from './groupManager/authorized-manager.service'

import { PermissionGroupMemberComponent } from './groupMember/permission-group-member.component'
import { PermissionGroupMemberService } from './groupMember/permission-group-member.service'
import { PermissionGroupMemberFilterPipe } from './groupMember/permission-group-member-filter.pipe'

import { CostarContactService } from './common/costar-contact.service'
import { CommonService } from './common/common.service'
import { PermissionComponent } from './permission/permission.component'
import { PermissionService } from './permission/permission.service'
import { PermissionFilterPipe } from './permission/permission-filter.pipe'

import { UserComponent } from './user/user.component'
import { UserService } from './user/user.service'
import { userFilterPipe } from './user/user-filter.pipe'
import {  UniquePipe } from './common/unique-filter.pipe'

import { SecurityAreaComponent } from './securityArea/securityArea.component'
import { SecurityAreaService } from './securityArea/securityArea.service'
import { SecurityAreaGroupComponent } from './securityArea/securityAreaGroup.component'
import { SecurityAreaUserComponent } from './securityArea/securityAreaUser.component'
import { SecurityAreaDetailComponent } from './securityArea/securityAreaDetail.component'
import { SecurityAreaEditComponent } from './securityArea/securityAreaEdit.component'
import { securityAreaFilterPipe } from './securityArea/securityArea-filter.pipe'

import { PermissionWizardGroupComponent } from './permissionWizard/permissionWizardGroup.component';
import { PermissionWizardIndividualComponent } from './permissionWizard/permissionWizardIndividual.component';
import { IndividualsToGroupComponent } from './admin/individuals-to-group.component';
import { CopyUserPermission } from './admin/copy-user-permission.component';
import { PermissionReportComponent } from './admin/permission-report.component';

import { NotAuthorizedComponent } from './common/not-authorized.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        ToastyModule.forRoot(),
        Ng2CompleterModule,
        NgxPaginationModule
    ],
    declarations: [
        AppComponent,
        PermissionGroupComponent,
        PermissionGroupEditComponent,
        PermissionGroupFilterPipe,
        PermissionReportFilterPipe,
        PermissionReportSAFilterPipe,
        PermissionReportEmailFilterPipe,
        securityAreaFilterPipe,
        AuthorizedManagerComponent,
        PermissionGroupMemberComponent,
        PermissionGroupMemberFilterPipe,
        PermissionComponent,
        PermissionFilterPipe,
        UserComponent,
        userFilterPipe,
        UniquePipe,
        SecurityAreaComponent,
        SecurityAreaGroupComponent,
        SecurityAreaUserComponent,
        SecurityAreaDetailComponent,
        SecurityAreaEditComponent,
        PermissionWizardGroupComponent,
        PermissionWizardIndividualComponent,
        IndividualsToGroupComponent,
        CopyUserPermission,
        PermissionReportComponent,
        NotAuthorizedComponent
    ],
    providers: [CostarContactService, PermissionGroupService, AuthorizedManagerService, PermissionGroupMemberService,
                CommonService, PermissionService, UserService, SecurityAreaService],
    bootstrap: [AppComponent]
})
export class AppModule { }

