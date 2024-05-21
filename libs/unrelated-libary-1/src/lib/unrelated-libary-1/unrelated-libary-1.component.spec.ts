import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnrelatedLibary1Component } from './unrelated-libary-1.component';

describe('UnrelatedLibary1Component', () => {
  let component: UnrelatedLibary1Component;
  let fixture: ComponentFixture<UnrelatedLibary1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedLibary1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UnrelatedLibary1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
