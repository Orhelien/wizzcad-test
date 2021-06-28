import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { SharedModule } from './shared/shared.module';
import { ReplaySubject } from 'rxjs';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { NgHttpLoaderModule } from 'ng-http-loader';

const eventSubject = new ReplaySubject<RouterEvent>(1);

const routerMock = {
  navigate: jasmine.createSpy('navigate'),
  events: eventSubject.asObservable(),
  url: '/'
}

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        NgHttpLoaderModule
      ],
      providers: [
        AuthService,
        { provide: Router, useValue: routerMock }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();


  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-title').textContent).toContain('Wizzcad test');
  });

  it(`user must should not be loggin`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    eventSubject.next(new NavigationEnd(1, '/', '/'));
    expect(app.userIsLoggedIn).toEqual(false);
  });
});
