import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProfileComponent }  from './components/profile.component';
import { AboutComponent }  from './components/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);