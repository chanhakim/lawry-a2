import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresComponent } from './chores.component';

describe('ChoresComponent', () => {
  let component: ChoresComponent;
  let fixture: ComponentFixture<ChoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
