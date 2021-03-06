import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "../heroes/heroes.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { MessagesComponent } from "../messages/messages.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
