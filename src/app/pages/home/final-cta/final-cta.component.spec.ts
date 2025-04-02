import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCTAComponent } from './final-cta.component';

describe('FinalCTAComponent', () => {
  let component: FinalCTAComponent;
  let fixture: ComponentFixture<FinalCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalCTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
