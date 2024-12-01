import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstaskComponent } from './detailstask.component';

describe('DetailstaskComponent', () => {
  let component: DetailstaskComponent;
  let fixture: ComponentFixture<DetailstaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailstaskComponent]
    });
    fixture = TestBed.createComponent(DetailstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
