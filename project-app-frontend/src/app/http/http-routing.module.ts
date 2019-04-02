import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

//загружаемые компоненты
import { C2PostComponent } from './c2-post/c2-post.component';
import { C3GetComponent } from './c3-get/c3-get.component';
import { C3GetIdComponent } from './c3-get-id/c3-get-id.component';
import { C4PutComponent } from './c4-put/c4-put.component';
import { C5DeleteComponent } from './c5-delete/c5-delete.component';
import { C3GetChildrenComponent } from './c3-get-children/c3-get-children.component';
import { NotFoundComponent } from '../not-found/not-found.component';

//маршруты
const httpRoutes: Routes = [
	{ path: "http/post", component: C2PostComponent },
	{
		path: "http/get", component: C3GetComponent,
		children: [
			{ path: ':id/:firstName/:lastName/:email/:company/:phone/:photo', component: C3GetChildrenComponent }
		]
	},
	{ path: "http/get/:id", component: C3GetIdComponent },
	{ path: "http/put", component: C4PutComponent },
	{ path: "http/delete", component: C5DeleteComponent },
	{ path: "", redirectTo: "http/post", pathMatch: "full" },
	{ path:"**", component:NotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(httpRoutes)],
	exports: [RouterModule]
})

export class HttpRoutingModule { }

