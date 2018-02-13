import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({ selector: 'app-navbar', template: '<p>donger</p>' })
class AppNavbarComponent {}
@Component({ selector: 'router-outlet', template: '<p>donger</p>' })
class RouterOutlet {}

describe('Frontbage', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, AppNavbarComponent, RouterOutlet]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      // componentet i *.ts filen
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should contain a navbar`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement;
      expect(app.query(By.css('app-navbar'))).toBeTruthy();
    })
  );

  it(
    `should contain router-outlet`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement;
      expect(app.query(By.css('router-outlet'))).toBeTruthy();
    })
  );
});
