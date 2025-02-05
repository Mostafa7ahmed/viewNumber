import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledataComponent } from './tabledata.component';

describe('TabledataComponent', () => {
  let component: TabledataComponent;
  let fixture: ComponentFixture<TabledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabledataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
