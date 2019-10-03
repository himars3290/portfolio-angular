import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  projects: any;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getProjects()
      .subscribe(res => {
        this.projects = res;
      });
  }

}
