import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesComponent } from './profiles.component';
import { By } from '@angular/platform-browser';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let fixture: ComponentFixture<ProfilesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProfilesComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(
    `should contain 4 profile components`,
    async(() => {
      const fixture = TestBed.createComponent(ProfilesComponent);
      const app = fixture.debugElement;
      expect(app.queryAll(By.css('app-profile')).length).toEqual(4);
    })
  );
});
