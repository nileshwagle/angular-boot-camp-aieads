import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: string[];
  @Input() selectedVideo: string | undefined;
  @Output() videoClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: string) {
    console.log('user clicked on ' + video);
    this.videoClicked.emit(video);
  }
}