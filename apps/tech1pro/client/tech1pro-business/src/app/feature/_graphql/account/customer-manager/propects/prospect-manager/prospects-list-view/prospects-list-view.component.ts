import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProspectCrudService } from 'src/app/feature/_graphql/_service/prospect.crud-service';
import { Prospect } from 'src/generated/graphql';

@Component({
  selector: 'app-prospects-list-view',
  templateUrl: './prospects-list-view.component.html',
  styleUrls: ['./prospects-list-view.component.css']
})
export class ProspectsListViewComponent implements OnInit {

  prospects$!: Observable<Prospect[]>;

  constructor(private prospectCrudSvc: ProspectCrudService) { }

  ngOnInit() {
    this.prospects$ = this.prospectCrudSvc.prospects$();
  }

}
