import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DataTableModule, ButtonModule, InputMaskModule, InputTextModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

import { ItemCadastroService } from './item-cadastro/item-cadastro.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, DataTableModule,
    HttpClientModule, ButtonModule, InputMaskModule, InputTextModule, CalendarModule, FormsModule
  ],
  providers: [ItemCadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
