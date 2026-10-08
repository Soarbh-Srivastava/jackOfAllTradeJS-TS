import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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
    (argv) => {
      console.log(
        `Creating a new note: ${argv.note}${argv.tag ? ` [${argv.tag}]` : ""}`,
      );
    },
  )
  .command(
    "find <id>",
    "Find a note by ID",
    (yargs) =>
      yargs.positional("id", {
        describe: "The ID of the note to find",
        type: "string",
      }),
    (argv) => {
      console.log(`Finding note: ${argv.id}`);
    },
  )
  .command(
    "remove <id>",
    "Remove a note by ID",
    (yargs) =>
      yargs.positional("id", {
        describe: "The ID of the note to remove",
        type: "string",
      }),
    (argv) => {
      console.log(`Removing note: ${argv.id}`);
    },
  )
  .command("clean", "Remove all notes", {}, () => {
    console.log("Cleaning all notes");
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
    (argv) => {
      console.log(`Starting web interface on port ${argv.port}`);
    },
  )
  .command("all", "List all notes", {}, () => {
    console.log("Listing all notes");
  })
  .option("tag", {
    alias: "t",
    type: "string",
    description: "Add a tag to the note",
  })
  .demandCommand(1)
  .parse();
