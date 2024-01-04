import { Routes } from '@angular/router';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    
    { path: 'user/list', component: UserListComponent },
    { path: 'user/create', component: UserCreateComponent },
    { path: 'user/detail/:id', component: UserDetailComponent },
    { path: 'user/change/:id', component: UserChangeComponent },

    { path: '**', component: E404Component }
];
