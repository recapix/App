import { Component, ContentChild } from "@angular/core";
import { ShowHideInput } from "./show-hide-input"

@Component({
  selector: "show-hide-container",
  templateUrl: "show-hide-password.html",
  host: {
    "class": "show-hide-password"
  }
})
export class ShowHideContainer {
  _show = false;

  @ContentChild(ShowHideInput) input: ShowHideInput;

  toggleShow() {
    this._show = !this._show;
    this.input.changeType(this._show ? "text" : "password");
  }
}
