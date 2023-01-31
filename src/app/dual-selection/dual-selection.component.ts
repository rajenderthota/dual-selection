import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDataItem, IDataTableColumn, IDatatableLoadEvent, TdDataTableSortingOrder } from '../data-table/data-table-modal';

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
export function deepClone(oldArray: IDataItem[]): IDataItem[] {
  let newArray: any = [];
  oldArray.forEach((item) => {
    newArray.push(Object.assign({}, item));
  });
  return newArray;
}


@Component({
  selector: 'app-dual-selection',
  templateUrl: './dual-selection.component.html',
  styleUrls: ['./dual-selection.component.scss']
})
export class DualSelectionComponent implements OnInit {

  @Input() columns: IDataTableColumn[] = [];
  @Input() source: any[] = [];
  @Input() destination: any[] = [];
  @Output() destinationChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  loading: boolean = true;
  sourceFilteredTotal: number = this.source.length;
  destinationFilteredTotal: number = this.destination.length;
  selectedRows: any[] = [];
  rselectedRows: any[] = [];
  constructor(private _cdr: ChangeDetectorRef) { }

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

  selectedRowChange(event: any) {
    // console.log("selectedRowchange event triggered.." + event);
  }

  showAlert(message: Event) {
    // console.log(message);
  }

  rightDoubleClickHandle(row: any) {
    this.shifttoRight();
  }
  leftDoubleClickHandle(row: any) {
    this.shifttoLeft();
  }

  shiftAllRight() {
    this.source.forEach(el => {
      this.destination.push(el);
    })
    this.source = [];
  }
  shiftAllLeft() {
    this.destination.forEach(el => {
      this.source.push(el);
    })
    this.destination = [];
    this.destinationChange.emit(this.destination);
    this.rselectedRows = [];
  }
  shifttoLeft() {

    //   this.filteredData2=  (19 > -1) ? [
    //     ...this.filteredData2.slice(0, 19),
    //     ...this.filteredData2.slice(19 + 1)
    // ] : this.filteredData2;

    this.rselectedRows.forEach(row => {
      const index: number = this.destination.indexOf(row);
      if (index !== -1) {
        this.destination.splice(index, 1);
        this.source.push(row);
      } else {
        // this.selectedRows.push(row);
      }
    });
    this.rselectedRows = [];

  }

  shifttoRight() {
    this.selectedRows.forEach(element => {
      const index: number = this.source.indexOf(element);
      if (index !== -1) {
        this.source.splice(index, 1);
        this.destination.push(element);
      } else {
        // this.selectedRows.push(row);
      }
    });
    this.selectedRows = [];
  }


  load(loadParams: IDatatableLoadEvent): void {
    this.loading = true;
    this.source = this.source;
    this.destination = this.destination;
  }
}



