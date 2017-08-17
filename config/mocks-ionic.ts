import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

export class PlatformMock {
  public ready(): Promise<String> {
    return new Promise((resolve) => {
      resolve("READY");
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    console.log(fn);
    console.log(priority);
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    console.log(ele);
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    console.log(container);
    return {
      paddingLeft: "10",
      paddingTop: "10",
      paddingRight: "10",
      paddingBottom: "10"
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    console.log(ele);
    console.log(eventName);
    console.log(callback);
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    console.log(callback);
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    console.log(id);
  }

  public getActiveElement(): any {
    return document["activeElement"];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}
