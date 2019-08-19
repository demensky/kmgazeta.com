import {CompactLatLngLiteral} from './compact-lat-lng-literal';

export interface DistributorLiteral {
    readonly title: string;
    readonly description: string;
    readonly primary: boolean;
    readonly position: CompactLatLngLiteral;
}
