import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  getAllNotes,
  newNote,
  findNotes,
  removeNote,
  removeAllNotes,
} from "./notes.js";
import { startServer } from "./server.js";
const listNotes = (notes) => {
  notes.forEach(({ id, content, tags }) => {
    console.log(`ID: ${id}`);
    console.log(`Content: ${content}`);
    console.log(`Tags: ${tags.join(", ")}`);
    console.log("------------ \n");
  });
};

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("note", {
        describe: "The note to create",
        type: "string",
      });
    },
    async (argv) => {
      const tags = argv.tags ? argv.tags.split(",") : [];
      const note = await newNote(argv.note, tags);
      console.log(`Created new note: ${note}`);
    },
  )
  .command(
    "find <filter>",
    "Find notes by filter",
    (yargs) => {
      return yargs.positional("filter", {
        describe: "The filter to search for",
        type: "string",
      });
    },
    async (argv) => {
      const matches = await findNotes(argv.filter);
      listNotes(matches);
    },
  )
  .command(
    "remove <id>",
    "Remove a note by ID",
    (yargs) =>
      yargs.positional("id", {
        describe: "The ID of the note to remove",
        type: "number",
      }),
    async (argv) => {
      await removeNote(argv.id);
      console.log(`Removed note: ${argv.id}`);
    },
  )
  .command("clean", "Remove all notes", {}, async () => {
    await removeAllNotes();
  })
  .command(
    "web [port]",
    "Start the web interface",
    (yargs) =>
      yargs.positional("port", {
        describe: "The port for the web interface",
        type: "number",
        default: 3000,
      }),
    async (argv) => {
      const notes = await getAllNotes();
      startServer(notes, argv.port);
    },
  )
  .command("all", "List all notes", {}, async () => {
    console.log("Listing all notes");
    const notes = await getAllNotes();
    console.log(`Listing all notes: ${notes.length}`);
    listNotes(notes);
  })
  .parseAsync();
