import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) { }

  transform(key: any): any {
    // console.log('\n key: ', key);
    // console.log('\n data: ', this.translate.data);
    let transformedText = key.split('.').reduce((o,i)=>o[i], this.translate.data);
    // console.log('\n transformedText', transformedText);
    
    return transformedText || key;
  }


}
