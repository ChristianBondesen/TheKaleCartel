import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input, Type } from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('should contain <a> to: ', () => {
    it(
      `home`,
      async(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.debugElement;
        const el = app.queryAll(By.css('a')).map((a) => a.nativeElement);
        const element = el.find((a) => a.textContent === 'Home').textContent;
        expect(element).toContain('Home');
      })
    );
    it(
      `Events`,
      async(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.debugElement;
        const el = app.queryAll(By.css('a')).map((a) => a.nativeElement);
        const element = el.find((a) => a.textContent === 'Events').textContent;
        expect(element).toContain('Events');
      })
    );
    it(
      `Vedtag`,
      async(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const app = fixture.debugElement;
        const el = app.queryAll(By.css('a')).map((a) => a.nativeElement);
        const element = el.find((a) => a.textContent === 'Vedtag').textContent;
        expect(element).toContain('Vedtag');
      })
    );
  });
});
