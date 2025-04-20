import type { IStaticMethods } from 'preline/dist';
import 'jquery';

declare global {
  interface Window {
    // Optional third-party libraries
    _;
    $: typeof import('jquery');
    jQuery: typeof import('jquery');
    noUiSlider: any;
    DataTable: any;
    VanillaCalendarPro: any;
    Dropzone;

    // Preline UI
    HSStaticMethods: IStaticMethods;
  }
}

declare module 'jquery' {
  interface JQuery {
    dataTable(...args: any[]): any;
    DataTable(...args: any[]): any;
  }
}

export {};
