import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MedsComponent } from './components/pages/meds/meds.component';
import { InfoComponent } from './components/pages/info/info.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { NavigationComponent } from './components/sections/navigation/navigation.component';
import { SlideComponent } from './components/sections/slide/slide.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { RouterModule} from '@angular/router';
import { ContainerDisplayerComponent } from './components/sections/container-displayer/container-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedsComponent,
    InfoComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    NavigationComponent,
    SlideComponent,
    FooterComponent,
    ContainerDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
