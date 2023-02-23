import { RegionType } from '../../constants';

export const getCurrentRegion = (map: any, region: string) => map.find((location: any) => location.path === region);