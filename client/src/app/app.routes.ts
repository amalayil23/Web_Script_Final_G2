import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'product', component: ProductsComponent},
    {path:'services', component: ServicesComponent},
    {path:'contacts', component: ContactsComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];
