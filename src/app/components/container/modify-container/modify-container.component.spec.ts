import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContainerComponent } from './modify-container.component';

describe('ModifyContainerComponent', () => {
  let component: ModifyContainerComponent;
  let fixture: ComponentFixture<ModifyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyContainerComponent]
    });
    fixture = TestBed.createComponent(ModifyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
