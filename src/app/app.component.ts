import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudyTrackingComponent } from "./study-tracking/study-tracking.component";
import { FeaturesComponent } from "./features/features.component";
import { StatsComponent } from "./stats/stats.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, ]
})
export class AppComponent {
  title = 'web-study';
}
