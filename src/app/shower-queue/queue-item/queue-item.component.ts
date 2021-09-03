import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { QueueItem } from '../shower-queue.component';

@Component({
  selector: 'queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.scss']
})
export class QueueItemComponent implements OnInit {
  @Input() id: any;
  @Input() name: any;
  @Input() date: any;
  @Input() startTime: any;
  @Input() endTime: any;

  private qItemsCollection: AngularFirestoreCollection<QueueItem>;
  constructor(private afs: AngularFirestore) {
    this.qItemsCollection = afs.collection<QueueItem>('items');
  }

  ngOnInit(): void {
  }

  public deleteQItem() {
    this.qItemsCollection.doc(<string>this.id).delete();
  }

}
