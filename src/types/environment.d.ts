export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CLIENT_KEY: string;
      REACT_APP_CLIENT_SECRET: string;
      REACT_APP_REDIRECT_URI: string;
    }
  }
}
