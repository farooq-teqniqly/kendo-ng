import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PresetFilterComponent } from "./components/preset-filter/preset-filter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";

import { ButtonsModule } from "@progress/kendo-angular-buttons";

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
  ],
  declarations: [MainMenuComponent, SideMenuComponent, PresetFilterComponent],
  providers: [],
})
export class SharedModule {}
