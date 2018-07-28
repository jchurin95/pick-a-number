import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { LayoutComponent } from './components/container/layout/layout.component';
import { InteractiveComponent } from './components/container/interactive/interactive.component';
import { PcPickComponent } from './components/container/interactive/pc-pick/pc-pick.component';
import { UserPickComponent } from './components/container/interactive/user-pick/user-pick.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LayoutComponent,
    InteractiveComponent,
    PcPickComponent,
    UserPickComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
