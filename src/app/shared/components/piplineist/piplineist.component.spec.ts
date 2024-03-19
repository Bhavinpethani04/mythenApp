import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiplineistComponent } from './piplineist.component';

describe('PiplineistComponent', () => {
  let component: PiplineistComponent;
  let fixture: ComponentFixture<PiplineistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiplineistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiplineistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
