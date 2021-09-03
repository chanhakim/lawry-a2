import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { QueueItem } from '../shower-queue.component';

@Component({
  selector: 'shower-queue-dialog',
  templateUrl: './shower-queue-dialog.component.html',
  styleUrls: ['./shower-queue-dialog.component.scss']
})
export class ShowerQueueDialogComponent implements OnInit {
  private qItems: AngularFirestoreCollection<QueueItem>;
  constructor(
    public dialogRef: MatDialogRef<ShowerQueueDialogComponent>,
    private afs: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.qItems = afs.collection<QueueItem>('items');
  }

  ngOnInit(): void {
    var today: Date = new Date();
    const diffTil = 15 - (today.getMinutes() % 15);
    today = this.addMinutes(today, diffTil);

    const dateParsed: string[] = today.toLocaleDateString().split('/');
    const dateString: string = dateParsed[2] + '-' + dateParsed[0].padStart(2, '0') + '-' + dateParsed[1].padStart(2, '0');
    const hours: number = today.getHours();
    const minutes: number = today.getMinutes();
    const hoursString: string = hours.toString().padStart(2, '0');
    const minutesString: string = minutes.toString().padStart(2, '0');
    const timeString: string = hoursString + ":" + minutesString;

    document.getElementById('dateField')?.setAttribute('value', dateString);
    document.getElementById('timeField')?.setAttribute('value', timeString);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.saveData();
    this.dialogRef.close();
  }

  private async saveData() {
    const name: string = (<HTMLInputElement>document.getElementById('nameField')).value;
    const dateString: string = (<HTMLInputElement>document.getElementById('dateField')).value;
    const timeString: string = (<HTMLInputElement>document.getElementById('timeField')).value;
    const durationString: string = (<HTMLInputElement>document.getElementById('durationField')).value;
    const duration: number = Number(durationString);

    // console.log(name, dateString, timeString, durationString);
    const date = new Date(dateString + "T" + timeString);
    const newQItem = this.qItems.doc();
    const res = await newQItem.set({
      name: name,
      date: date,
      duration: duration
    });
  }

  private addMinutes(dt: Date, minutes: number) {
    return new Date(dt.getTime() + minutes * 60000);
  }

}
