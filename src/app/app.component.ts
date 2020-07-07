import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFeature = 'recipe';

  onFeatureSelect(feature: string) {
    this.currentFeature = feature;
  }
}
