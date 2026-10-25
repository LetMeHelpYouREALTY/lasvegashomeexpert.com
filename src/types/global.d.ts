// Global type declarations
declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'set',
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
    RealScout?: any;
    Homebot?: any;
    CloudCMA?: any;
    PercyAI?: any;
  }
}

// React 19 types moved JSX under the react module.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-office-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string | number;
        'price-max'?: string | number;
        features?: string;
        location?: string;
        'max-results'?: string | number;
        'architectural-style'?: string;
        [key: string]: any;
      };
      'realscout-property-search': {
        'agent-encoded-id': string;
        [key: string]: any;
      };
      'realscout-property-details': {
        'property-id': string;
        [key: string]: any;
      };
    }
  }
}

export {};
