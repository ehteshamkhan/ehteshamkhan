import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempToHireComponent } from './temp-to-hire/temp-to-hire.component';
import { AboutComponent } from './about/about.component';
import { BillingComponent } from './billing/billing.component';
import { CompetitiveFeeComponent } from './competitive-fee/competitive-fee.component';
import { PermPlacementComponent } from './perm-placement/perm-placement.component';
import { TemporaryStaffingComponent } from './temporary-staffing/temporary-staffing.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'competitive-fee', component: CompetitiveFeeComponent },
  { path: 'perm-placement', component: PermPlacementComponent },
  { path: 'temporary-staffing', component: TemporaryStaffingComponent },
  { path: 'temp-to-hire', component: TempToHireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


