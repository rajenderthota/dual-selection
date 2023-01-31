import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDataItem } from './data-table/data-table-modal';



@Injectable({
  providedIn :"root"
})
export class DataService {

  data: IDataItem[] =  [
    { name: 'Name 01',  description: 'Product name 1', price: 120 },
    { name: 'Name 02',  description: 'Product name 2', price: 121.90 },
    // { name: 'Name 03',  description: 'Long text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: 124 },
    { name: 'Name 04',  description: 'Product name 4', price: 128 },
    // { name: 'Name 05',  description: 'Product name 5', price: 1222 },
    // { name: 'Name 06',  description: 'Product name 6', price: 124 },
    // { name: 'Name 07',  description: 'Product name 7', price: 120 },
    // { name: 'Name 08',  description: 'Product name 8', price: 120 },
    // { name: 'Name 09',  description: 'Product name 9', price: 120 },
    // { name: 'Name 10',  description: 'Product name 10', price: 120 },
    // { name: 'Name 01',  description: 'Product name 1', price: 120 },
    // { name: 'Name 02',  description: 'Product name 2', price: 121 },
    // { name: 'Name 03',  description: 'Long text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: 124 },
    // { name: 'Name 04',  description: 'Product name 4', price: 128 },
    // { name: 'Name 05',  description: 'Product name 5', price: 1222 },
    // { name: 'Name 06',  description: 'Product name 6', price: 124 },
    // { name: 'Name 07',  description: 'Product name 7', price: 120 },
    // { name: 'Name 08',  description: 'Product name 8', price: 120 },
    // { name: 'Name 09',  description: 'Product name 9', price: 120 },
    // { name: 'Name 10',  description: 'Product name 10', price: 120 },
  ];

  constructor() { }

  loalData(orderBy: string = '', pageNumber: number = 2, pageSize: number = 10, searchQuery: string = "null", sortOrder: string = 'dest'): Observable<IDataItem[]> {
    // call your API here
    // sorting, pagination and filtering don't work in this demo,
    // you have to do it on your API or implement Covalent DataTable Service
    // - more in Covalent DataTable documentation

    // let query = this.apiEndpoint + '?';

    // if (orderBy) {
    //   query += 'orderBy=' + orderBy + ' ' + sortOrder;
    // }
    // query += '&pageNumber=' + pageNumber + '&pageSize=' + pageSize;

    // if (searchQuery) {
    //   query += '&searchQuery=' + searchQuery;
    // }
    // return this.http.get<IDataItem[]>(environment.apiUrl + query);
    console.log(orderBy);


    return of<IDataItem[]>(this.data);
  }
}
