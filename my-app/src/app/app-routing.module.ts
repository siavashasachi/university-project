import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessHelpComponent } from './success-help/success-help.component';

const routes: Routes = [
  {
    path: 'submit-help',
    component: SuccessHelpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
