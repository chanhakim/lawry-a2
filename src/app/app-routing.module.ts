import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlistComponent } from './blist/blist.component';
import { ChoresComponent } from './chores/chores.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShowerQueueComponent } from './shower-queue/shower-queue.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shower-queue', component: ShowerQueueComponent },
  { path: 'chores', component: ChoresComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'blist', component: BlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
