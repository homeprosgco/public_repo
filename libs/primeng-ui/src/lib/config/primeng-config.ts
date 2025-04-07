import { PrimeNGConfigType, providePrimeNG } from 'primeng/config';
import { FilterMatchMode } from 'primeng/api';
import { ThemePreset } from '../preset/primeng-preset';

const primeNgConfig: PrimeNGConfigType = {
    theme: {
        preset: ThemePreset,
        options: {},
    },
    inputVariant: 'filled',
    ripple: true,
    filterMatchModeOptions: {
        text: [
            FilterMatchMode.STARTS_WITH,
            FilterMatchMode.CONTAINS,
            FilterMatchMode.NOT_CONTAINS,
            FilterMatchMode.ENDS_WITH,
            FilterMatchMode.EQUALS,
            FilterMatchMode.NOT_EQUALS,
        ],
        numeric: [
            FilterMatchMode.EQUALS,
            FilterMatchMode.NOT_EQUALS,
            FilterMatchMode.LESS_THAN,
            FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
            FilterMatchMode.GREATER_THAN,
            FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
        ],
        date: [
            FilterMatchMode.DATE_IS,
            FilterMatchMode.DATE_IS_NOT,
            FilterMatchMode.DATE_BEFORE,
            FilterMatchMode.DATE_AFTER,
        ],
    },
};

export function providePrimeNGConfig() {
    return providePrimeNG(primeNgConfig);
}
