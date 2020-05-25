import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { CoreRoutes } from './core/core.routes';
import { HelloModule } from './core/Hello/Hello.module';
import { HelloComponent } from './core/Hello/view/Hello.component';
import { HelloHomeModule } from './core/hello-home/hello-home.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(CoreRoutes),
    HelloModule,
    HelloHomeModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
