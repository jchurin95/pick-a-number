import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { LayoutComponent } from './components/container/layout/layout.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DozingBirdComponent } from './components/container/layout/dozing-bird/dozing-bird.component';
import { PcPickComponent } from './components/container/layout/pc-pick/pc-pick.component';
import { UserPickComponent } from './components/container/layout/user-pick/user-pick.component';
import { MessagesService } from './services/messages.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LayoutComponent,
    PcPickComponent,
    UserPickComponent,
    SpinnerComponent,
    DozingBirdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
