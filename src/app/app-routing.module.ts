import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantallaExamenComponent } from './pantalla-examen/pantalla-examen.component';

const routes: Routes = [
  {path: '',redirectTo: 'pantalla-examen', pathMatch: 'full'}, //para redirigir directamente
  {path: 'pantalla-examen', component: PantallaExamenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
