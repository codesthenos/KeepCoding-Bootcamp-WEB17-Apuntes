type StorageKey = 'auth'
const storage = {
  get: (key: string) => {
    const value = localStorage.getItem(key)

    if (!value) {
      return null
    }
    return value
  },
  set: (key: StorageKey, value: string) => {
    localStorage.setItem(key, value)
  },
  remove: (key: StorageKey) => {
    localStorage.removeItem(key)
  },
  clear: () => {
    localStorage.clear()
  }
}

export default storage