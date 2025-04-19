function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

  const result: number[] = []
  let a = 0
  let b = collection_2.length - 1
  let c = 0

  while (a < collection_1.length || b > -1 || c < collection_3.length) {
    const value1 = a < collection_1.length ? collection_1[a] : Infinity
    const value2 = b > -1 ? collection_2[b] : Infinity
    const value3 = c < collection_3.length ? collection_3[c] : Infinity

    if (value1 <= value2 && value1 <= value3) {
      result.push(value1)
      a++
    } else if (value2 <= value1 && value2 <= value3) {
      result.push(value2)
      b--
    } else if (value3 <= value1 && value3 <= value2) {
      result.push(value3)
      c++
    }
  }

  return result
}

export { merge }