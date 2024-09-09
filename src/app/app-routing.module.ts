import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';

const routes: Routes = [
  { path: '',
     redirectTo: 'Dashboard',
      pathMatch: 'full' },

  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'new',
    component:NewAppointmentComponent
  },
  {
    path:'list',
    component:AppointmentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
