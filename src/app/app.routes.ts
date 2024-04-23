import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';
//import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'Register',component:RegisterComponent},
   // {path:'products',component:ProductComponent,canActivate:[authGuard]},
    {path:'products',loadComponent:()=>import('./components/product/product.component')
    .then((obj)=>obj.ProductComponent)
    ,canActivate:[authGuard]},
     
    {path:'addProduct',component:AddProductComponent},
    {path:'addProduct/:id',component:AddProductComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'about',component:AboutComponent,children:[
        {path:'', redirectTo:"vision", pathMatch:"full"},
        {path:'vision',component:VisionComponent},
        {path:'values',component:ValuesComponent}
    ]},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent,children:[
        {path:'',redirectTo:'sign-in',pathMatch:'full'}, 
        {path:'signIn',component:SignInComponent},
        {path:'signOut',component:SignOutComponent}
    ]},
    {path:'**',component:NotFoundComponent},
];
