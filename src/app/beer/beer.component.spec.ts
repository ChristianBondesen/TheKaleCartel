import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BeerComponent } from './beer.component';
import { By } from '@angular/platform-browser';

describe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;
  let el: HTMLElement;
  let elList: HTMLElement[];

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BeerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a beer defined', () => {
    expect(component.Beer).toBeDefined();
  });
  it(
    'should show beer name in a h2 tag',
    async(() => {
      const fixture = TestBed.createComponent(BeerComponent);
      const app = fixture.debugElement;
      el = app.query(By.css('h2')).nativeElement;
      expect(el.textContent).toContain(component.Beer.Name);
    })
  );
  it(
    'should show beer description in a div element',
    async(() => {
      const fixture = TestBed.createComponent(BeerComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const description = elList.find(
        (j) => j.textContent === component.Beer.Description
      );
      expect(description).toBeDefined();
    })
  );
  it(
    'should show beer % vol in a div element',
    async(() => {
      const fixture = TestBed.createComponent(BeerComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const vol = elList.find((j) => j.textContent === component.Beer.Vol);
      expect(vol).toBeDefined();
    })
  );
  it(
    'should show beer Date in a div element',
    async(() => {
      const fixture = TestBed.createComponent(BeerComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const date = elList.find((j) => j.textContent === component.Beer.Date);
      expect(date).toBeDefined();
    })
  );
  it(
    'should show beer rating in a div element',
    async(() => {
      const fixture = TestBed.createComponent(BeerComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const rating = elList.find(
        (j) => j.textContent === component.Beer.Rating
      );
      expect(rating).toBeDefined();
    })
  );
});
