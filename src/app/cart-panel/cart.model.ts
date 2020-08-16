import { product } from '../Shared/Model/product.model';

 export class cart{
     constructor(
         public product:product,
        public amount:number
     ){}

} 