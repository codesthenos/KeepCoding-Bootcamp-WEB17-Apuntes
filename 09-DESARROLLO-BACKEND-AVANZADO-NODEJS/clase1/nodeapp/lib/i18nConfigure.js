import path from 'node:path'
import { I18n } from 'i18n'
import { __dirname } from '../lib/utils.js'

const i18n = new I18n({
  locales: ['en', 'es'],
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'en',
  autoReload: true, // watch for changes in JSON files to reload changes - defaults to false
  syncFiles: true // sync all info across all files - defaults to false
})

export default i18n