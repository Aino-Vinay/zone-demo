import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageListComponent } from './pagelist/pagelist.component';
import { PropertyBoxComponent } from './propertybox/propertybox.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditorDivComponent } from './editor-div/editor-div.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageListComponent,
    PropertyBoxComponent,
    FooterComponent,
    EditorDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,PageListComponent,PropertyBoxComponent,FooterComponent,EditorDivComponent]
})
export class AppModule { }
