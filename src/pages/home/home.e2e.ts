import { browser, by, element } from "protractor";

class HomeObj {
    public title: any;
    constructor() {
        this.title = element(by.id("title"));
    }
}

describe("App", () => {
    beforeEach(() => {
        browser.get("/");
        browser.sleep(2000); // if your test is outrunning the browser 
        browser.ignoreSynchronization = true; // If true, Protractor will not attempt to synchronize with the page before performing actions
    });
    it("Should have a title", () => {
        var home = new HomeObj();
        expect((home.title).isDisplayed()).toBeTruthy();
    });
    it("The text must contain Barney", () => {
        var home = new HomeObj();
        home.title.getText().then(function (text) {
            expect(text).toContain("barney");
        });
    });
});
