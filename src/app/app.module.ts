import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertylistComponent } from './propertylist/propertylist.component';
import { BrochureComponent } from './brochure/brochure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PropertyComponent } from './property/property.component';
import { PropertyService } from './service/property.service';

const routes: Routes = [
  { path: 'brochure/:id', component:BrochureComponent },
  { path: 'gallery/:id', component:GalleryComponent },
  { path: 'property', component:PropertyComponent },
  { path: '', component:PropertylistComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    PropertylistComponent,
    BrochureComponent,
    GalleryComponent,
    PropertyComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatSortModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
