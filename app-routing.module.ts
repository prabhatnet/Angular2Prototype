import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGroupComponent } from './groups/permission-group.component';
import { PermissionGroupEditComponent } from './groups/permission-group-edit.component';
import { AuthorizedManagerComponent } from './groupManager/authorized-manager.component';
import { PermissionGroupMemberComponent } from './groupMember/permission-group-member.component';
import { PermissionComponent } from './permission/permission.component';
import { UserComponent } from './user/user.component';
import { SecurityAreaComponent } from './securityArea/securityArea.component';
import { SecurityAreaGroupComponent } from './securityArea/securityAreaGroup.component';
import { SecurityAreaUserComponent } from './securityArea/securityAreaUser.component';
import { SecurityAreaDetailComponent } from './securityArea/securityAreaDetail.component';
import { SecurityAreaEditComponent } from './securityArea/securityAreaEdit.component';
import { PermissionWizardGroupComponent } from './permissionWizard/permissionWizardGroup.component';
import { PermissionWizardIndividualComponent } from './permissionWizard/permissionWizardIndividual.component';
import { IndividualsToGroupComponent } from './admin/individuals-to-group.component';
import { CopyUserPermission } from './admin/copy-user-permission.component';
import { PermissionReportComponent } from './admin/permission-report.component';
import { NotAuthorizedComponent } from './common/not-authorized.component';

const routes: Routes = [
  

    { path: 'permissionGroup', component: PermissionGroupComponent },
    { path: 'permissionGroupEdit/:id', component: PermissionGroupEditComponent },
    { path: 'authorizedManager/:id', component: AuthorizedManagerComponent },
    { path: 'permissionGroupMember/:id', component: PermissionGroupMemberComponent },
    { path: 'permission/:id', component: PermissionComponent },
    { path: 'securityArea', component: SecurityAreaComponent },
    { path: 'securityAreaGroup', component: SecurityAreaGroupComponent },
    { path: 'securityAreaUser', component: SecurityAreaUserComponent },
    { path: 'securityAreaDetail', component: SecurityAreaDetailComponent },
    { path: 'securityAreaEdit', component: SecurityAreaEditComponent },
    { path: 'user', component: UserComponent },
    { path: 'permissionWizardGroup', component: PermissionWizardGroupComponent },
    { path: 'permissionWizardIndividual', component: PermissionWizardIndividualComponent },
    { path: 'individualsToGroup', component: IndividualsToGroupComponent },
    { path: 'copyUserPermission', component: CopyUserPermission },
    { path: 'permissionReport', component: PermissionReportComponent },
    { path: 'notAuthorized', component: NotAuthorizedComponent },
    { path: '', redirectTo: '/permissionGroup', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
