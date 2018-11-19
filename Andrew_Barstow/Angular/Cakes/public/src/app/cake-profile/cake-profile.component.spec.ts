import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeProfileComponent } from './cake-profile.component';

describe('CakeProfileComponent', () => {
  let component: CakeProfileComponent;
  let fixture: ComponentFixture<CakeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
