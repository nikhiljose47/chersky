import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MainCardComponent } from './components/shared-components/main-card/main-card.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MobileHomeComponent } from './components/mobiles/mobile-home/mobile-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCardComponent,
    PageNotFoundComponent,
    MobileHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
