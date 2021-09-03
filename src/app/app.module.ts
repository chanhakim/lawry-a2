import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { HomeComponent } from './home/home.component';
import { BlistComponent } from './blist/blist.component';
import { ShowerQueueComponent } from './shower-queue/shower-queue.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ChoresComponent } from './chores/chores.component'
import { environment } from 'src/environments/environment';
import { QueueItemComponent } from './shower-queue/queue-item/queue-item.component';
import { ShowerQueueDialogComponent } from './shower-queue/shower-queue-dialog/shower-queue-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlistComponent,
    ShowerQueueComponent,
    ShoppingListComponent,
    ChoresComponent,
    QueueItemComponent,
    ShowerQueueDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NavbarModule,
    WavesModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
