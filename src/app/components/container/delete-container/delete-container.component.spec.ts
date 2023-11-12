import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContainerComponent } from './delete-container.component';

describe('DeleteContainerComponent', () => {
  let component: DeleteContainerComponent;
  let fixture: ComponentFixture<DeleteContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteContainerComponent]
    });
    fixture = TestBed.createComponent(DeleteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
