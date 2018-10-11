import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot(
      {
        apiKey:'Your_Key'
      }
    ), AgmDirectionModule,
    AgmSnazzyInfoWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
