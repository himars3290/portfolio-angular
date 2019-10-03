import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}),
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {

  projects: any;
  state: string = 'inactive';

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getProjects()
      .subscribe(res => {
        this.projects = res;
      });
  }

}
