import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListItemComponent } from './launch-list-item.component';

describe('LaunchListItemComponent', () => {
  let component: LaunchListItemComponent;
  let fixture: ComponentFixture<LaunchListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
