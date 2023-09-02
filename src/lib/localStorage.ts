export function useLocalStorage(key: string) {
  if (!key) throw new Error('localStorage key not provided')

  function load() {
    return JSON.parse(localStorage.getItem(key) || '')
  }

  function save(data: unknown) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function clear() {
    localStorage.removeItem(key)
  }

  return {
    load,
    save,
    clear
  }
}
