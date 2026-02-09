interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly DEV: boolean;
  readonly VITE_APP_NAME: string;
  // Add other VITE_ prefixed env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
