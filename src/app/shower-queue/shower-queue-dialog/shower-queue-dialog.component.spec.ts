import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowerQueueDialogComponent } from './shower-queue-dialog.component';

describe('ShowerQueueDialogComponent', () => {
  let component: ShowerQueueDialogComponent;
  let fixture: ComponentFixture<ShowerQueueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowerQueueDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowerQueueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
