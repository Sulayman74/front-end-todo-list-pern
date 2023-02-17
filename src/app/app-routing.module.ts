import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "", loadChildren: () => import("./modules/main/main.module").then(m => m.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
