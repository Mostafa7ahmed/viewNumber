import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderviewnumberComponent } from './headerviewnumber.component';

describe('HeaderviewnumberComponent', () => {
  let component: HeaderviewnumberComponent;
  let fixture: ComponentFixture<HeaderviewnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderviewnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderviewnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
