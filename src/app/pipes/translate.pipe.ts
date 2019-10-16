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
    let path = '';

    // tslint:disable-next-line:one-variable-per-declaration
    // const path = `${this.translate.data}.${key}`;
    // const path = this.translate.data[key];
    // console.log(path);

    const d = key.split('.').reduce(this.index, this.translate.data)
    console.log('********************************** \n OUTPUT: TranslatePipe -> constructor -> d', d);
    console.log(key.split('.').reduce((o,i)=>o[i], this.translate.data));
    
    


    return path || key;
  }

  index(obj, i) {
    return obj[i]
  }

}
