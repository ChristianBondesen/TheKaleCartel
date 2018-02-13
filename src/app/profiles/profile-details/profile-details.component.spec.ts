import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsComponent } from './profile-details.component';
import { By } from '@angular/platform-browser';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileDetailsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should have total user information', () => {
    expect(component.TotalUser).toBeDefined();
  });
  it(
    `Should contains profiles recipes`,
    async(() => {
      const fixture = TestBed.createComponent(ProfileDetailsComponent);
      const app = fixture.debugElement;
      expect(app.query(By.css('app-recipe'))).toBeTruthy();
    })
  );
  it(
    `Should contains profiles beers`,
    async(() => {
      const fixture = TestBed.createComponent(ProfileDetailsComponent);
      const app = fixture.debugElement;
      expect(app.query(By.css('app-beer'))).toBeTruthy();
    })
  );
});
