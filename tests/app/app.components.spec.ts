import { async, TestBed } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MyApp } from "../../src/app/app.component";
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from "../../config/mocks-ionic";

describe("MyApp Component", () => {
  let fixture: any;
  let component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        { provide: Platform, useClass: PlatformMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: StatusBar, useClass: StatusBarMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component instanceof MyApp).toBe(true);
  });

});
