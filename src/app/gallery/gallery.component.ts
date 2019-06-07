import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private data: any;
  constructor(private propertyService: PropertyService,
    private route: Router,
    private routeParam: ActivatedRoute) { }

  ngOnInit() {
    this.routeParam.params.subscribe((param: ParamMap) => {
      this.getPropertyById(param['id']);
    });
  }

  getPropertyById(id: any) {
    this.propertyService.getPropertById(id).then(dt => {
      this.data = dt;
    });
  }

}
