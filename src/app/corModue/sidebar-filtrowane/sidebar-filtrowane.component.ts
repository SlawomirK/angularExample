import { Component, OnInit } from '@angular/core';
import { PreparatyService } from 'src/app/preparaty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-filtrowane',
  templateUrl: './sidebar-filtrowane.component.html',
  styleUrls: ['./sidebar-filtrowane.component.less']
})
export class SidebarFiltrowaneComponent implements OnInit {

  constructor(private preparaty:PreparatyService,private route:ActivatedRoute) { }

  ngOnInit() {
  }
  loadFiltered(){
    const id=+this.route.snapshot.params['id'];
  }

}
