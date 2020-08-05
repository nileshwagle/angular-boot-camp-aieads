import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { ViewFilterFormComponent } from './view-filter-form/view-filter-form.component';
import { ViewGraphComponent } from './view-graph/view-graph.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, VideoListComponent, VideoEmbedderComponent, ViewFilterFormComponent, ViewGraphComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
