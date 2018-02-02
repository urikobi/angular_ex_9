import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatButton} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzaListComponentComponent } from './pizza-list-component/pizza-list-component.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaService } from './shared/services/pizza.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzaListComponentComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatButtonModule
    ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
