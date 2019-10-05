import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) { }

  transform(key: any): any {
    console.log(key);
    console.log(this.translate.data);

    // tslint:disable-next-line:one-variable-per-declaration
    const path = `${this.translate.data}.${key}`;
    // const path = this.translate.data[key];

    console.log(path);

    return path || key;
  }

}
