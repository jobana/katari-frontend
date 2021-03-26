import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';


@NgModule({
  declarations: [CreateComponent],
  exports: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
