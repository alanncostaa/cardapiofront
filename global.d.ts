// global.d.ts
export {}; // garante que é um módulo

declare global {
  interface Window {
    VLibras: {
      Widget: (url: string) => void;
    };
  }
}
