import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiltrowaneComponent } from './sidebar-filtrowane.component';

describe('SidebarFiltrowaneComponent', () => {
  let component: SidebarFiltrowaneComponent;
  let fixture: ComponentFixture<SidebarFiltrowaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFiltrowaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFiltrowaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
