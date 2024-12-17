// En CommonJS para referenciar la carpeta actual:
// __dirname

// En ESModules para referenciar la carpeta actual: (Node 20.11 o superior)
// import.meta.dirname

// import.meta.dirname/filename existe desde Node 20.11

export const __dirname = import.meta.dirname
export const __filename = import.meta.filename

// En ESModules Node < 20.11:
/*
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)
*/