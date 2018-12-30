import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatugaryComponent } from './catugary.component';

describe('CatugaryComponent', () => {
  let component: CatugaryComponent;
  let fixture: ComponentFixture<CatugaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatugaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatugaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
