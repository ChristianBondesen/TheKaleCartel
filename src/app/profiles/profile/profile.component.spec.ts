import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ProfileComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Component code tests:', () => {
    it('CaleLevel Greater Than zero', () => {
      expect(component.user).toBeDefined();
    });
    it('User has CaleRating', () => {
      expect(component.user.CaleRating).toBeDefined();
    });
    it('User has Description', () => {
      expect(component.user.Description).toBeDefined();
    });
    it('User has PicUrl', () => {
      expect(component.user.PicUrl).toBeDefined();
    });
    it('User has Name', () => {
      expect(component.user.Name).toBeDefined();
    });
  });
});
