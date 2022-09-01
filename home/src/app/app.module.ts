import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { SkillsComponent } from "./skills/skills.component";
import { SkillItemComponent } from "./skill-item/skill-item.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TransitionGroupItemDirective } from "./directives/transition-group-item.directive";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    SkillsComponent,
    SkillItemComponent,
    TransitionGroupItemDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
