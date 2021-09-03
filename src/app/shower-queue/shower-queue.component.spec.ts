import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerQueueComponent } from './shower-queue.component';

describe('ShowerQueueComponent', () => {
  let component: ShowerQueueComponent;
  let fixture: ComponentFixture<ShowerQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowerQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowerQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
