import { ChangeDetectorRef } from "@angular/core";



export interface IDatatableLoadEvent {
  searchTerm: string;
  fromRow: number;
  currentPage: number;
  pageSize: number;
  sortBy: string;
  sortOrder: TdDataTableSortingOrder;
}

export interface IDataTableColumn extends ITdDataTableColumn {
  name: string;
  label: string;
  tooltip?: string;
  numeric?: boolean;
  format?: (value: any) => any;
  nested?: boolean;
  sortable?: boolean;
  hidden?: boolean;
  filter?: boolean;
  width?: ITdDataTableColumnWidth | number;
  nooverflow?: boolean;
}

export enum TdDataTableSortingOrder {
  Ascending = "ASC",
  Descending = "DESC",
}
export interface ITdDataTableColumnWidth {
  min?: number;
  max?: number;
}
export interface ITdDataTableColumn {
  name: string;
  label: string;
  tooltip?: string;
  numeric?: boolean;
  format?: (value: any) => any;
  nested?: boolean;
  sortable?: boolean;
  hidden?: boolean;
  filter?: boolean;
  width?: ITdDataTableColumnWidth | number;
}
export interface ITdDataTableSelectEvent {
  row: any;
  selected: boolean;
  index: number;
}
export interface ITdDataTableSelectAllEvent {
  rows: any[];
  selected: boolean;
}
export interface ITdDataTableRowClickEvent {
  row: any;
  index: number;
}
export interface IInternalColumnWidth {
  value: number;
  limit: boolean;
  index: number;
  min?: boolean;
  max?: boolean;
}
export declare class TdDataTableBase {
  _changeDetectorRef: ChangeDetectorRef;
  constructor(_changeDetectorRef: ChangeDetectorRef);
}

export interface ITdDataTableSortChangeEvent {
  order: TdDataTableSortingOrder;
  name: string;
}
export interface IPageChangeEvent {
  page: number;
  maxPage: number;
  pageSize: number;
  total: number;
  fromRow: number;
  toRow: number;
}
export interface IDataItem {
  name: string,
  description: string,
  price: number
}
