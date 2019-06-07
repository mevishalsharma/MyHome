import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent implements OnInit {

  private data: any;  
  constructor(private propertyService: PropertyService,
    private route: Router,
    private routeParam: ActivatedRoute) {

     }

  ngOnInit() {
    this.routeParam.params.subscribe((param: ParamMap) => {
      this.getPropertyById(param['id']);
    });
  }

  getPropertyById(id: any) {
   this.propertyService.getPropertById(id).then(dt=>{
    this.data  =JSON.stringify(dt);
   });
  }

}
