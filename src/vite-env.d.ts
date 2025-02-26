/// <reference types="vite/client" />

// Extend the global Window interface to include Calendly methods
interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color?: string;
        textColor?: string;
      }) => void;
    };
  }
  