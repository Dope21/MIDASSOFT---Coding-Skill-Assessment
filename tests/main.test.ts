import { merge } from "../src/main";

describe("merge", () => {
  it("should return correct answer", () => {
    const collection_1 = [1, 3, 5]
    const collection_2 = [9, 6, 2]
    const collection_3 = [0, 4, 8, 10]

    const result = merge(collection_1, collection_2, collection_3)
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 8, 9, 10])
  })

  it("should work with empty list", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  })

  it("should work with duplicate numbers", () => {
    expect(merge([1, 2], [3, 2, 1], [2, 2])).toEqual([1, 1, 2, 2, 2, 2, 3]);
  })

  it("should return wrong answer if second list is also ascending", () => {
    const collection_1 = [1, 3, 5]
    const collection_2 = [12, 17, 21]
    const collection_3 = [0, 4, 8, 10]

    const result = merge(collection_1, collection_2, collection_3)
    expect(result).not.toEqual([0, 1, 3, 4, 5, 8, 10, 12, 17, 21])
  })
})