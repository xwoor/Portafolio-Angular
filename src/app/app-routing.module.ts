import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './paginas/portafolio/portafolio.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ItemComponent } from './paginas/item/item.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
