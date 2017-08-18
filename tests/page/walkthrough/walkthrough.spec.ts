import { } from "jasmine";
import { WalkthroughPage } from "../../../src/pages";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { NavController } from "ionic-angular";

describe("Home Page:", () => {

    let comp: WalkthroughPage;
    let fixture: ComponentFixture<WalkthroughPage>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [WalkthroughPage],
            providers: [
                { provide: NavController, useValue: NavController },
            ],
        });
        fixture = TestBed.createComponent(WalkthroughPage);
        // #trick
        // If you want to trigger ionViewWillEnter automatically de-comment the following line
        // fixture.componentInstance.ionViewWillEnter();
        fixture.detectChanges();
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });

    describe(".constructor()", () => {
        it("Should be defined", () => {
            expect(comp).toBeDefined();
        });
    });

    describe("Call Functions", () => {
        it("click on Skip Into", () => {
            spyOnProperty(comp, "pageSlider", "get")
                .and
                .returnValue({
                    length: () => { return 5; },
                    slideTo: (value: number) => {
                        console.log("Slided to Slide number ", value);
                    }
                });
            // expect(comp.skipIntro()).toHaveBeenCalled();
            comp.skipIntro();
        });

        it("toHaveBeenCalled is called", () => {
            spyOnProperty(comp, "pageSlider", "get")
                .and
                .returnValue({
                    length: () => { return 5; },
                    slideTo: (value: number) => {
                        console.log("Slided to Slide number ", value);
                    },
                    isEnd: () => false
                });
            // expect(comp.skipIntro()).toHaveBeenCalled();
            comp.onSlideChanged();
        });        
    });
});
