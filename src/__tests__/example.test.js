import { describe, test, expect } from "vitest"
import { sortObjectsArray } from "../example"

describe('Sorting function', () => {
    const objectsArray = [
        { id: 1, name: 'Sergio'},
        { id: 2, name: 'Carlos'},
        { id: 3, name: 'Max'},
    ]
    test('Sort asc', () => {
        const expectedArray = [
            { id: 2, name: 'Carlos'},
            { id: 3, name: 'Max'},
            { id: 1, name: 'Sergio'},
        ]
        const sortedArray = sortObjectsArray(objectsArray, 'name')
        expect(sortedArray).toStrictEqual(expectedArray)
    })
    test('Sort desc', () => {
        const expectedArray = [
            { id: 1, name: 'Sergio'},
            { id: 3, name: 'Max'},
            { id: 2, name: 'Carlos'},
        ]
        const sortedArray = sortObjectsArray(objectsArray, 'name', 'desc')
        expect(sortedArray).toStrictEqual(expectedArray)
    })
    test('Sort error', () => {
        const expectedArray = [
            { id: 2, name: 'Carlos'},
            { id: 3, name: 'Max'},
            { id: 1, name: 'Sergio'},
        ]
        const sortedArray = sortObjectsArray(objectsArray)
        expect(sortedArray).toStrictEqual(expectedArray)
    })
})