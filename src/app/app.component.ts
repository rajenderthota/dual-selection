import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IDataItem, IDataTableColumn, IDatatableLoadEvent, TdDataTableSortingOrder } from './data-table/data-table-modal';
import { DataService } from './data.service';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dual-select-app';

  columns: IDataTableColumn[] = [
    { name: 'name',  label: 'Product name', sortable: true, width: 100 },
    { name: 'description', label: 'Description', filter: true, sortable: true, width: 30, nooverflow: true },
    { name: 'price', label: 'Price', numeric: true, sortable: true, format: DECIMAL_FORMAT, width: 20 },
  ];

  filteredData: IDataItem[] = [];
  filteredData2: IDataItem[] = [];

  constructor(
    //private _dataTableService: TdDataTableService,
              private _dataService: DataService,
              private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    // initial loading with default state
    // if we would not do this we would get exception
    // - ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after
    //   it was checked. Previous value: 'loading: false'. Current value: 'loading: true'.
    const loadVar: IDatatableLoadEvent = {
      searchTerm: '',
      fromRow: 1,
      currentPage: 1,
      pageSize: 10,
      sortBy: 'name',
      sortOrder: TdDataTableSortingOrder.Ascending
    };
    this.load(loadVar);
  }

  load(loadParams: IDatatableLoadEvent): void {
    this._dataService.loalData(loadParams.sortBy, loadParams.currentPage, loadParams.pageSize, loadParams.searchTerm, loadParams.sortOrder.toLowerCase())
    .subscribe((data: IDataItem[]) => {
      this.filteredData = data;
      this.filteredData2.push({ name: 'Name 21',  description: 'Product name 1', price: 120 });
      // we have to set x-pagination to COSR rules on API server
    }, error => {
      console.log(error.error);
    });
  }
}


