import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { listadoProductos, Producto } from '../../core/models/public/productsList.model';

declare var $: any;

@Component({
  selector: 'app-productsinspiration',
  templateUrl: './productsinspiration.component.html',
  styleUrls: ['./productsinspiration.component.scss']
})
export class ProductsinspirationComponent implements OnInit {
  
  listadoProductos:Array<Producto>;

  constructor(public api:ApiService) { }

  ngOnInit() {    

    $(document).ready(function(){
	
      $( ".ani-fav" )
        .mouseenter(function() {
            $('.h-product').css('margin-top','26px');
            setTimeout(function(){ 
                $('.h-product').css('background-image','url("assets/images/heart-pF.png")');
                $('.h-product').css('margin-top','0px');
              }, 300);
    
        })
        .mouseleave(function() {
            setTimeout(function(){ 
                $('.h-product').css('background-image','url("assets/images/heart-p.svg")');   
              }, 300);
      });	
      $( ".ani-car" )
        .mouseenter(function() {
            $('.b-product').css('margin-top','26px');
            setTimeout(function(){ 
                $('.b-product').css('background-image','url("assets/images/b-productF.png")');
                $('.b-product').css('margin-top','0px');
              }, 300);
    
        })
        .mouseleave(function() {
            setTimeout(function(){ 
                $('.b-product').css('background-image','url("assets/images/b-product.png")');   
              }, 300);
      });
  })
  this.api.getProduct().subscribe((items: listadoProductos)=>{
    this.listadoProductos = items.data.docs; 
  },
  (error)=>{

  })
  }
  

}
