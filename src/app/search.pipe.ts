import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  private searchKeyword: string = "";
  private Result: any[] = [];

  constructor() {

  }

  transform(items: any[], searchText: string): any[] {

    items.forEach(item=>{
      if(item){
        for( const ch in item){
          console.log(item[ch]);
        }
      }

    });
    console.log("search pipe items ::"+items);

    if (this.isObjNull(items)) return [-1];
    if (this.isObjNull(searchText)) return items;
    this.searchKeyword = searchText.toLowerCase();
    // this.Result = items.filter(o => this.checkAgainstProperty(o));

    this.Result=items.filter(item => {

      // return item.toLowerCase().includes(this.searchKeyword.toLowerCase());
      // for( const ch in item){
      //   // if(item[ch].toLowerCase().indexOf(this.searchKeyword.toLowerCase())>0)
      //   if(item[ch].toLowerCase().indexOf(this.searchKeyword.toLowerCase())>0)
      //     return item;
      // }

      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(this.searchKeyword.toLowerCase());
      });

    });

    if (this.Result.length === 0) {
      return [];
    }
    return this.Result;
  }

  private checkAgainstProperty(property: any): boolean {
    let value: boolean = false;

    if (!this.isNullOrWhiteSpace(property)) {
      console.log("--property--"+property.toLowerCase());
      if (property.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >= 0) {
        value = true;
      }
    }

    return value;
  }

  public isObjNull(obj: any, isNumber = false): boolean {
    let value: boolean = true;

    if (!isNumber && obj && obj != undefined && obj != null)
      value = false;
    else if (isNumber && obj != undefined && obj != null)
      value = false;

    return value;
  }

  public isNullOrWhiteSpace(obj: string): boolean {
    let value: boolean = true;

    if (!this.isObjNull(obj) && obj.trim() != "")
      value = false;

    return value;
  }
}
