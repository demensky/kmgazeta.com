import { TestBed, async } from '@angular/core/testing';
import { KmMapComponent } from './km-map.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KmMapComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(KmMapComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'srd-box'`, () => {
    const fixture = TestBed.createComponent(KmMapComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('srd-km');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(KmMapComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to srd-km!');
  });
});
