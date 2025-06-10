export default function randomArrayElements<T>(count: number, anonFunc: () => T) {
  return Array.from({length: Math.floor(Math.random() * count)}).map(anonFunc)
}