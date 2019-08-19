import {deserializeCompactLatLng} from './deserialize-compact-lat-lng';
import {DistributorLiteral} from './distributor-literal';

export class Distributor {
    public static deserialize({
        title,
        description,
        primary,
        position,
    }: DistributorLiteral): Distributor {
        return new Distributor(
            title,
            description,
            primary,
            deserializeCompactLatLng(position),
        );
    }

    public constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly primary: boolean,
        public readonly position: google.maps.LatLng,
    ) {}
}
