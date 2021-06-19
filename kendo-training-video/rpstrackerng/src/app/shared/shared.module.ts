import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PresetFilterComponent } from "./components/preset-filter/preset-filter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@NgModule({
  imports: [FormsModule, RouterModule, NgbModule],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    MainMenuComponent,
    SideMenuComponent,
    PresetFilterComponent,
    NgbModule,
    ButtonsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
  ],
  declarations: [MainMenuComponent, SideMenuComponent, PresetFilterComponent],
  providers: [],
})
export class SharedModule {}
