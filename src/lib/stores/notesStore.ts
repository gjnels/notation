import { browser } from '$app/environment'
import { useLocalStorage } from '$lib/localStorage'
import { derived, get, writable } from 'svelte/store'

const noteStorage = useLocalStorage('notes')

export interface Note {
  id: string
  title: string
  body: string
}

const store = writable<Note[]>([])

function loadNotes() {
  if (browser) {
    store.set(noteStorage.load() || [])
  }
}

function createNote(newNote: Note) {
  store.update((notes) => {
    const newNotes = [...notes, newNote]
    noteStorage.save(newNotes)
    return newNotes
  })
}

function deleteNote(id: string) {
  store.update((notes) => {
    const newNotes = notes.filter((note) => note.id !== id)
    noteStorage.save(newNotes)
    return newNotes
  })
}

function updateNote(updatedNote: Note) {
  store.update((notes) => {
    const newNotes = notes.map((note) =>
      note.id === updatedNote.id ? { ...note, ...updatedNote, id: note.id } : note
    )
    noteStorage.save(newNotes)
    return newNotes
  })
}

function findNote(id: string) {
  return get(notes).find((note) => note.id === id)
}

const { subscribe } = derived(store, ($notes) => $notes)

export const notes = { subscribe, createNote, deleteNote, updateNote, findNote, loadNotes }

export const noteToUpdate = writable<Note | undefined>(undefined)
