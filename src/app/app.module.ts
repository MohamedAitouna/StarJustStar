import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutes } from './core/core.routes';
import { HelloModule } from './core/Hello/Hello.module';
import { HelloComponent } from './core/Hello/view/Hello.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(CoreRoutes),
    HelloModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
