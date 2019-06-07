import { Component, OnInit } from '@angular/core';
import { PropertyModel } from '../shared/models/property.model';
import { PropertyService } from '../service/property.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  public propertyElement: PropertyModel = new PropertyModel();

  constructor(private propertyService:PropertyService,private route:Router) { 
    
  }
  
  ngOnInit() {
  }

  onSubmitClick(){
    this.propertyService.addNewProperty(this.propertyElement);
    this.route.navigate(['']);    
  }

  onBackClick(){
    this.route.navigate(['']);
  }
}
