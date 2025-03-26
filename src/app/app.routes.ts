import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'skill',
        component: SkillComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
