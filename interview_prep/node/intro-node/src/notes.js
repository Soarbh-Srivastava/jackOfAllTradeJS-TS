import { insertDB, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    id: Date.now(),
    tags,
    content: note,
  };

  await insertDB(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const db = await getDB();
  return db.notes;
};

export const findNotes = async (filter) => {
  const notes = await getAllNotes();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase()),
  );
};

export const removeNote = async (id) => {
  const { notes } = await getDB();
  const match = notes.find((note) => note.id === id);
  console.log(match);
  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => {
  await saveDB({ notes: [] });
};
