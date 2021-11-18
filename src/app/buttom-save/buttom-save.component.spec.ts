import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomSaveComponent } from './buttom-save.component';

describe('ButtomSaveComponent', () => {
  let component: ButtomSaveComponent;
  let fixture: ComponentFixture<ButtomSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
