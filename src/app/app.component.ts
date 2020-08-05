import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedVideo: string = undefined;
  name = 'Angular ' + VERSION.major;
  videos = ['Video 1', 'Video 2', 'Video 3'];

  onvideoClicked(v: string) {
    console.log('Viedo Selected', v);
    this.selectedVideo = v;
  }
}
