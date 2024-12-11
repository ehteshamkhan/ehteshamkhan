import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TemporaryStaffingComponent } from './temporary-staffing/temporary-staffing.component';
import { TempToHireComponent } from './temp-to-hire/temp-to-hire.component';
import { PermPlacementComponent } from './perm-placement/perm-placement.component';
import { CompetitiveFeeComponent } from './competitive-fee/competitive-fee.component';
import { BillingComponent } from './billing/billing.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TemporaryStaffingComponent,
    TempToHireComponent,
    PermPlacementComponent,
    CompetitiveFeeComponent,
    BillingComponent,
    LogoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
