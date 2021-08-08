import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent, data: {title: 'Home'}},
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
