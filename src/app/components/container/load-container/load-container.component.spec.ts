import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadContainerComponent } from './load-container.component';

describe('LoadContainerComponent', () => {
  let component: LoadContainerComponent;
  let fixture: ComponentFixture<LoadContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadContainerComponent]
    });
    fixture = TestBed.createComponent(LoadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
