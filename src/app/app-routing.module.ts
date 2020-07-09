import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopoverComponent} from './popover/popover.component';
import {AccordionComponent} from './accordion/accordion.component';


const routes: Routes = [{ path: 'popover', component: PopoverComponent},
{ path: 'accordion', component: AccordionComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
