import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterviewnmberComponent } from './footerviewnmber.component';

describe('FooterviewnmberComponent', () => {
  let component: FooterviewnmberComponent;
  let fixture: ComponentFixture<FooterviewnmberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterviewnmberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterviewnmberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
