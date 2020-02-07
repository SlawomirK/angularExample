import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatListComponent } from './preparat-list.component';

describe('PreparatListComponent', () => {
  let component: PreparatListComponent;
  let fixture: ComponentFixture<PreparatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
