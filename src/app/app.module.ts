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
import { MatToolbarModule } from '@angular/material/toolbar';



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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
