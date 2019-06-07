import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class PropertyService {

    constructor(private ht: HttpClient) { }

    private webApiUrl: string = 'http://localhost:50260/api/property/';
    private addPropertyUrl: string = this.webApiUrl + 'AddNewProperty';
    private getAllPropertyUrl: string = this.webApiUrl + 'GetPropertyList';
    private deletePropertyUrl: string = this.webApiUrl + 'Delete';
    private GetPropertyById: string = this.webApiUrl + 'GetPropertyById';

    addNewProperty(property: any): any {
        return this.ht.post(this.addPropertyUrl, property).toPromise().then(response => response);
    }

    getPropertyList(): any {
        return this.ht.get(this.getAllPropertyUrl).toPromise().then(response => response);
    }

    deleteProperty(id: any): any {

        return this.ht.delete(this.deletePropertyUrl + "/" + id).toPromise().then(response => response);
    }

    getPropertById(id: any): any {

        return this.ht.get(this.GetPropertyById + "/" + id).toPromise().then(response => response);
    }


}
