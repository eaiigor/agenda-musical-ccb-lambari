import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaioRegionalComponent } from './ensaio-regional.component';

describe('EnsaioRegionalComponent', () => {
  let component: EnsaioRegionalComponent;
  let fixture: ComponentFixture<EnsaioRegionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsaioRegionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsaioRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
