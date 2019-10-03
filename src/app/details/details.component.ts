import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  project: any;

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
