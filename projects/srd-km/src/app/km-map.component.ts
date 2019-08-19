import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {distributors, mapCenter, mapZoom} from './data.json';
import {deserializeCompactLatLng} from './deserialize-compact-lat-lng';
import {Distributor} from './distributor';

@Component({
    selector: 'srd-km-map',
    templateUrl: './km-map.component.html',
    styleUrls: ['./km-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KmMapComponent {
    @ViewChild('window', {static: true})
    private readonly _infoWindow!: google.maps.InfoWindow;

    public mapCenter: google.maps.LatLng = deserializeCompactLatLng(mapCenter);

    public mapZoom: number = mapZoom;

    public distributors: readonly Distributor[] = distributors.map<Distributor>(
        Distributor.deserialize,
    );

    public current: Distributor | null = null;

    public onMarkerClick(
        distributor: Distributor,
        marker: google.maps.Marker,
    ): void {
        this.current = distributor;
        this._infoWindow.open(undefined, marker);
    }

    public onWindowCloseClick(): void {
        this.current = null;
    }
}
