import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicListComponent } from './public-list.component';

describe('PublicListComponent', () => {
  let component: PublicListComponent;
  let fixture: ComponentFixture<PublicListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicListComponent]
    });
    fixture = TestBed.createComponent(PublicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
