import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}),
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideInRight', [
      state('true', style({transform: 'translateX(0)', opacity: '1'})),
      transition('void => *', [
        style({transform: 'translateX(150px)', opacity: '0'}),
        animate('300ms 500ms ease-out')
      ])
    ]),
    trigger('slider', [
      state('true', style({transform: 'scaleY(0)'})),
      transition('void => *', [
        style({transform: 'scaleY(1)'}),
        animate('300ms 800ms ease-in')
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {

  project: any;
  state:string = 'out';
  state2: string = 'true';

  constructor(private api: ApiService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const project_id = params['id'];
      this.api.getProject(project_id)
        .subscribe(res => {
          this.project = res;
          console.log(this.project);
        });
    });
  }

}
