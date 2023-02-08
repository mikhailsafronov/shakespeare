import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromCanvasObjects from './+canvas-objects/canvas-objects.reducer';
import { AppComponent } from './app.component';
import { AddControlsDirective, FontZoomDirective } from './directives';
import { CanvasComponent } from './components/canvas/canvas.component';
import { PageComponent } from './components/page/page.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
  { path: 'page/load', component: PageComponent },
  { path: 'page/show', component: ResultComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    PageComponent,
    FontZoomDirective,
    AddControlsDirective,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreModule.forFeature(
      fromCanvasObjects.CANVAS_OBJECTS_FEATURE_KEY,
      fromCanvasObjects.reducer
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
