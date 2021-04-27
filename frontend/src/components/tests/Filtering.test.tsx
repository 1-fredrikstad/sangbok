import { SongListEntry } from "src/types"
import {filterSongs} from "../../../pages/index"

describe('Test if filterSongs', () => {
    const songs: SongListEntry[] = [
{ melody: "Test sang", order: 1, title: "test-sang", slug: {current:"test-sang"}},
{ melody: "Påfuglenes dasj", order: 2, title: "påfuglenes-dans", slug: {current:"påfuglenes-dans"}},
{ melody: "Nok en sang", order: 3, title: "nok-en-sang", slug: {current:"nok-en-sang"}},
{ melody: "Testetest", order: 4, title: "testetest", slug: {current:"testetest"}},
    ]
    test('returns correct array with capitilized input', () => {
        const inputString = "SANG"
        const filteredSongs = filterSongs(songs, inputString)
        expect(filteredSongs.length).toBe(2)
    })

    test('returns correct array with lower cased input', () => {
        const inputString = "test"
        const filteredSongs = filterSongs(songs, inputString)
        expect(filteredSongs.length).toBe(2)
    })

    test('returns correct array with falsy input', () => {
        const inputString = "pladredsk"
        const filteredSongs = filterSongs(songs, inputString)
        expect(filteredSongs.length).toBe(0)
    })
} )
