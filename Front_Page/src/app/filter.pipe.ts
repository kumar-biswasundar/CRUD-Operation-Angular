import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if (!value) return null;
    if (!args) return value;

    const searchTerm = args.toLowerCase();
    return value.filter((item: any) =>
      JSON.stringify(item).toLowerCase().includes(searchTerm)
    );
  }

}
