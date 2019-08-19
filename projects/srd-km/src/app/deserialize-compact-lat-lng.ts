import {CompactLatLngLiteral} from './compact-lat-lng-literal';

export function deserializeCompactLatLng([
    lat,
    lng,
]: CompactLatLngLiteral): google.maps.LatLng {
    return new google.maps.LatLng(lat, lng);
}
