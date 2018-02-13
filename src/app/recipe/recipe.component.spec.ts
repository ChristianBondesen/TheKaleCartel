import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import { By } from '@angular/platform-browser';
import { Recipe } from './Recipe';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let el: HTMLElement;
  let elList: HTMLElement[];
  const res: Recipe = {
    name: 'a',
    rating: '2',
    courseOfAction: 'frem',
    date: new Date(),
    person: 'simon'
  };
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RecipeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    component.Recipe = res;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a Recipe defined', () => {
    expect(component.Recipe).toBeDefined();
  });
  it(
    'should show Recipe name in a h2 tag',
    async(() => {
      const fixture = TestBed.createComponent(RecipeComponent);
      const app = fixture.debugElement;
      el = app.query(By.css('h2')).nativeElement;
      expect(el.textContent).toContain(component.Recipe.name);
    })
  );
  it(
    'should show Recipe description in a div element',
    async(() => {
      const fixture = TestBed.createComponent(RecipeComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const description = elList.find(
        (j) => j.textContent === component.Recipe.courseOfAction
      );
      expect(description).toBeDefined();
    })
  );
  it(
    'should show Recipe components in a div element',
    async(() => {
      const fixture = TestBed.createComponent(RecipeComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const vol = elList.find(
        (j) => j.textContent === component.Recipe.ingredients
      );
      expect(vol).toBeDefined();
    })
  );
  it(
    'should show Recipe rating in a div element',
    async(() => {
      const fixture = TestBed.createComponent(RecipeComponent);
      const app = fixture.debugElement;
      elList = app.queryAll(By.css('div')).map((i) => i.nativeElement);
      const rating = elList.find((j) => j.textContent === component.Recipe.ra);
      expect(rating).toBeDefined();
    })
  );
});
