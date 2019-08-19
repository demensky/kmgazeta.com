import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
    GmCommonModule,
    GmInfoWindowModule,
    GmMapModule,
    GmMarkerModule,
} from 'nggm';
import {KmMapComponent} from './km-map.component';

@NgModule({
    imports: [
        BrowserModule,
        GmCommonModule,
        GmMarkerModule,
        GmMapModule,
        GmInfoWindowModule,
    ],
    declarations: [KmMapComponent],
    providers: [],
    bootstrap: [KmMapComponent],
})
export class KmSiteModule {}
