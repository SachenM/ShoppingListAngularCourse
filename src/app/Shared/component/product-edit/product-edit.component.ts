import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/products-panel/products.service';
import { product } from '../../Model/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  editmode = false;
  productForm: FormGroup;

  constructor(private A_route: ActivatedRoute,
    private route: Router,
    private prodServ: ProductService) { }

  ngOnInit(): void {
    this.A_route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.editmode = param['id'] != null;
        this.InitForm()
        console.log(this.editmode)
        console.log(this.id)
      }
    )


  }


  private InitForm() {
    let prodName = '';
    let prodImagePath = '';
    let description = '';
    let type = '';
    let cost: number = null;
    let comp = new FormArray([]);

    if (this.editmode) {
      const editProduct: product = this.prodServ.getProduct(this.id);

      prodName = editProduct.name;
      prodImagePath = editProduct.image
      description = editProduct.desctription
      type = editProduct.type
      cost = editProduct.cost
      if (editProduct.components) {
        for (let component of editProduct.components) {
          comp.push(
            new FormGroup({
              'name': new FormControl(component.name, Validators.required),
              'Quantity': new FormControl(component.Quantity, [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)])
            })
          )
        }
      }
    }

    comp.push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'Quantity': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)])
    }))

    console.log(prodName)

    this.productForm = new FormGroup({
      'name': new FormControl(prodName, Validators.required),
      'image': new FormControl(prodImagePath, Validators.required),
      'desctription': new FormControl(description),
      'type': new FormControl(type, Validators.required),
      'cost': new FormControl(cost, [Validators.required, Validators.pattern(/(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/)]),
      'components': comp
    })
  }

  onSave() {
    console.log(this.productForm)

    if (this.productForm.valid) {
      if (this.editmode) {
        this.prodServ.updateProduct(this.id, this.productForm.value)
      } else {
        this.prodServ.addProduct(this.productForm.value)
      }

      this.route.navigate(["../"], { relativeTo: this.A_route })

    }



  }


  onAddComponent() {

    console.log('onAddComponent');
    (<FormArray>this.productForm.get('components')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'Quantity': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[1-9]*$/)])
      })
    )
  }

  get controls() { // a getter!
    return (<FormArray>this.productForm.get('components')).controls;
  }

  onDeleteComponent(index: number) {
    (<FormArray>this.productForm.get('components')).removeAt(index);
  }



}


