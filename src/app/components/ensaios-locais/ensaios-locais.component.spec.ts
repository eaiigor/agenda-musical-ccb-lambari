import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaiosLocaisComponent } from './ensaios-locais.component';

describe('EnsaiosLocaisComponent', () => {
  let component: EnsaiosLocaisComponent;
  let fixture: ComponentFixture<EnsaiosLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsaiosLocaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsaiosLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
