import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sample1',
    pathMatch: 'full'
  },
  {
    path: 'sample1',
    component: Sample1Component,
  },
  {
    path: 'sample2',
    component: Sample2Component,
  },
  {
    path: 'sample3',
    component: Sample3Component
  },
  {
    path: 'sample4',
    component: Sample4Component
  },
  {
    path: 'sample5',
    component: Sample5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
