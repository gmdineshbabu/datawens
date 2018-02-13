import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { SalesDetailsComponent } from './sales/sales-details/sales-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'sales', pathMatch: 'full' },
    { path: 'sales', component: SalesComponent, },
    { path: 'salesdetails/:month', component: SalesDetailsComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting { }
