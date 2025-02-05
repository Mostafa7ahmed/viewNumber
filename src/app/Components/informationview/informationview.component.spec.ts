import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationviewComponent } from './informationview.component';

describe('InformationviewComponent', () => {
  let component: InformationviewComponent;
  let fixture: ComponentFixture<InformationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
