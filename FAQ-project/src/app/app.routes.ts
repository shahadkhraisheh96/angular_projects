import { Routes } from '@angular/router';
import { ListFaq } from './list-faq/list-faq';
import { FormFaq } from './form-faq/form-faq';

export const routes: Routes = [
    {path:'',component:ListFaq},
    {path:'faq',component:ListFaq},
    {path:'update/:id' ,component:FormFaq},
    {path:'add',component:FormFaq}
];
