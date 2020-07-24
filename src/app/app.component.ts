import { Component } from '@angular/core';
import { ShoppingService } from './shopping-list/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingService]
})
export class AppComponent {
  currentFeature = 'recipe';

  onFeatureSelect(feature: string) {
    this.currentFeature = feature;
  }
}
