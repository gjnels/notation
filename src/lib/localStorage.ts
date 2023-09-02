export function useLocalStorage<T>(key: string) {
  if (!key) throw new Error('localStorage key not provided')

  function load() {
    const storedData = localStorage.getItem(key)
    return storedData ? (JSON.parse(storedData) as T) : undefined
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
