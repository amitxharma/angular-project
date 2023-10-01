import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component'; // Import NavComponent
import { SideformComponent } from './sideform/sideform.component'; // Import SideFormComponent

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent, // Include NavComponent in the declarations
    SideformComponent, // Include SideFormComponent in the declarations
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
