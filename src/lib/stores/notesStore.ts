import { derived, writable } from 'svelte/store'

export interface Note {
  id: string
  title: string
  body: string
}

const store = writable<Note[]>([])

function createNote(newNote: Note) {
  store.update((notes) => [...notes, newNote])
}

function deleteNote(id: string) {
  store.update((notes) => notes.filter((note) => note.id !== id))
}

function updateNote(updatedNote: Note) {
  store.update((notes) =>
    notes.map((note) =>
      note.id === updatedNote.id ? { ...note, ...updatedNote, id: note.id } : note
    )
  )
}

const { subscribe } = derived(store, ($notes) => $notes)

export const notes = { subscribe, createNote, deleteNote, updateNote }

export const noteToUpdate = writable<Note | undefined>(undefined)
