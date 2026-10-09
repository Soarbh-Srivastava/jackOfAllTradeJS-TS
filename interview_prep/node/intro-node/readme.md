# Notes CLI

A simple command-line application to create, search, list, and delete notes, with an optional web interface.

## Commands

### 1. Create a new note

```bash
node index.js new "Learn Node.js"
```

### 2. Create a note with tags

```bash
node index.js new "Learn Node.js" --tags javascript,nodejs
```

### 3. Find notes

Search for notes matching a filter:

```bash
node index.js find "Node.js"
```

### 4. Remove a note

Delete a note using its ID:

```bash
node index.js remove 1
```

### 5. Remove all notes

Delete all stored notes:

```bash
node index.js clean
```

### 6. List all notes

Display every saved note:

```bash
node index.js all
```

### 7. Start the web interface

Start the web server on the default port `3000`:

```bash
node index.js web
```

Start the web server on a custom port:

```bash
node index.js web 4000
```

## Note Format

Each note contains:

- **ID** — Unique identifier for the note.
- **Content** — The note's text.
- **Tags** — A list of tags associated with the note.

## Examples

```bash
node index.js new "Build a REST API" --tags backend,nodejs
node index.js new "Practice DSA" --tags java,leetcode
node index.js all
node index.js find "REST API"
node index.js remove 1
```

## Help

Display available commands:

```bash
node index.js --help
```

Get help for a specific command:

```bash
node index.js new --help
node index.js find --help
node index.js remove --help
node index.js web --help
```
