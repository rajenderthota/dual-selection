import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { IDataTableColumn, IDatatableLoadEvent, IPageChangeEvent,  ITdDataTableSortChangeEvent,  TdDataTableSortingOrder } from './data-table-modal';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @ContentChild(TemplateRef) templateRef: TemplateRef<any> | undefined;

  @Input() loading: boolean = false;
  @Input() data: any[] = [];
  @Output() dataChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() selectedRows: any[] = [];
  @Input() totalCount: number = 0;
  @Input() columns: IDataTableColumn[] = [];

  @Input() sortable: boolean = false;
  @Input() selectable: boolean = false;
  @Input() clickable: boolean = false;
  @Input() multiple: boolean = false;

  // style inputs
  @Input() minHeight: number = 250;
  @Input() actionsVisible: boolean = false;
  @Input() actionsWidth: number = 90;

  @Output() loadEvent: EventEmitter<IDatatableLoadEvent> = new EventEmitter();
  @Output() rowClickEvent: EventEmitter<any> = new EventEmitter();
  @Output() selectedRowsChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Output() rowDoubleClickEvent: EventEmitter<any> = new EventEmitter();

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 10;
  sortBy: string = 'name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  // selectedRows: any[] = [];

  hasData: boolean = this.data.length === 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.columns.length !== 0) {
      this.sortBy = this.columns[0].name;
    }
  }

  checkAll(event: any) {
    if (this.selectedRows.length === this.data.length) {
      this.selectedRows = [];
    } else {
      this.selectedRows = Object.assign([], this.data);
    }
    this.selectedRowsChange.emit(this.selectedRows);
  }

  check(row: any) {
    const index: number = this.selectedRows.indexOf(row);
    if (index !== -1) {
      this.selectedRows.splice(index, 1);
    } else {
      this.selectedRows.push(row);
    }
    // console.log(this.selectedRows);
    this.selectedRowsChange.emit(this.selectedRows);
  }

  click(event: any): void {
    this.rowClickEvent.emit(event);
  }

  sort1(sortEvent: Event): void {

  }

  rowDoubleClick(row:any){
    this.check(row);
    this.rowDoubleClickEvent.emit(row);

  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    // empty selected rows
    this.selectedRows = [];

    if (this.sortBy !== sortEvent.name) {
      this.sortBy = sortEvent.name;
      this.sortOrder = TdDataTableSortingOrder.Ascending;
    } else if (this.sortOrder === TdDataTableSortingOrder.Ascending) {
      this.sortOrder = TdDataTableSortingOrder.Descending;
    } else {
      this.sortOrder = TdDataTableSortingOrder.Ascending;
    }
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;

    this.filter();
  }

  filter(): void {

    // this.data.filter(e => e.)

    const loadVar: IDatatableLoadEvent = {
      searchTerm: this.searchTerm,
      fromRow: this.fromRow,
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder
    };
    this.loadEvent.emit(loadVar);
  }
}
