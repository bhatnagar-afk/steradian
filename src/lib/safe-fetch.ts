export async function safeFetch<T>(fetcher: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fetcher()
  } catch (error) {
    console.error('Data fetch failed:', error)
    return fallback
  }
}
