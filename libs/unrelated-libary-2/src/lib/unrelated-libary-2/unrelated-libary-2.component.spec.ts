import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnrelatedLibary2Component } from './unrelated-libary-2.component';

describe('UnrelatedLibary2Component', () => {
  let component: UnrelatedLibary2Component;
  let fixture: ComponentFixture<UnrelatedLibary2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedLibary2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UnrelatedLibary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
