import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ReactiveFormsModule, BrowserAnimationsModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
