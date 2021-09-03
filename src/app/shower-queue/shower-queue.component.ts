import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ShowerQueueDialogComponent } from './shower-queue-dialog/shower-queue-dialog.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface QueueItem {
  name: string;
  date: Date;
  duration: number;
}

@Component({
  selector: 'shower-queue',
  templateUrl: './shower-queue.component.html',
  styleUrls: ['./shower-queue.component.scss']
})
export class ShowerQueueComponent implements OnInit {
  private qItemsCollection: AngularFirestoreCollection<QueueItem>;
  qItems: Observable<any>;
  constructor(public dialog: MatDialog, private afs: AngularFirestore) {
    this.qItemsCollection = afs.collection<QueueItem>('items', ref => ref.orderBy('date'));
    this.qItems = this.qItemsCollection.snapshotChanges()
      .pipe(map(actions => actions.map(
        a => (this.decodeQItem(a))
      )));
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShowerQueueDialogComponent);
  }

  private addMinutes(dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  }

  private decodeQItem(a: any) {
    const data = a.payload.doc.data();
    const id = a.payload.doc.id;

    const name: string = data.name;
    const date: Date = new Date(data.date.seconds * 1000);
    const duration: number = data.duration;
    const startTime: Date = date;
    const endTime: Date = this.addMinutes(startTime, duration);

    var dateString: string;
    const day: number = date.getDate();
    const today: number = new Date().getDate();
    if (day - today == 0) {
      dateString = "Today";
    } else if (day - today == 1) {
      dateString = "Tomorrow";
    } else {
      dateString = date.toDateString();
    }

    const qItem = {
      id: id,
      name: name,
      date: dateString,
      startTime: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    return qItem;
  }

}
