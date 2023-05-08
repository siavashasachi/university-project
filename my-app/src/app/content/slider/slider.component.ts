import { Component } from '@angular/core';
import{ images} from '../../slider-images';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images=images;
}
