import { browser } from '$app/environment'
import { derived, get, writable } from 'svelte/store'
import { useLocalStorage } from '$lib/localStorage'

const noteStorage = useLocalStorage<Note[]>('notes')

export interface Note {
  id: string
  title: string
  body: string
  createdAt: Date
  updatedAt: Date
}

const store = writable<Note[]>([])

const notesLoadingStore = writable(true)

function loadNotes() {
  if (browser) {
    const notes = noteStorage.load()?.map((note) => ({
      ...note,
      createdAt: new Date(note.createdAt),
      updatedAt: new Date(note.updatedAt)
    }))
    store.set(notes || [])
    notesLoadingStore.set(false)
  }
}

function createNote(newNote: Omit<Note, 'createdAt' | 'updatedAt'>) {
  store.update((notes) => {
    const now = new Date()
    const newNotes = [...notes, { ...newNote, createdAt: now, updatedAt: now }]
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

function updateNote(updatedNote: Omit<Note, 'createdAt' | 'updatedAt'>) {
  store.update((notes) => {
    const newNotes = notes.map((note) =>
      note.id === updatedNote.id ? { ...note, ...updatedNote, updatedAt: new Date() } : note
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

export const notesLoading = derived(notesLoadingStore, ($loading) => $loading)

export const searchQuery = writable('')
export const filteredNotes = derived([store, searchQuery], ([$notes, $query]) =>
  $notes.filter((note) => {
    const title = note.title.toLowerCase()
    const body = note.body.toLowerCase()
    const queryTerms = $query.trim().toLowerCase().split(' ')
    return queryTerms.every((term) => title.includes(term) || body.includes(term))
  })
)
