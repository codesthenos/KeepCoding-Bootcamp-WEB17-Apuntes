/// <reference types="vite/client" />

interface IMportMetaEnv {
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: IMportMetaEnv
}