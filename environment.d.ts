// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // google verification key (optional) - used for domain verification on https://search.google.com/search-console
      NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY: string;
    }
  }
}
