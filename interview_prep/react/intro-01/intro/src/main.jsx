import { createElement } from "react";
import { createRoot } from "react-dom/client";

// 1. Create your React element
const myElement = createElement(
  "h1",
  { className: "heading" },
  "Hello from React createElement!",
);

// 2. Find the root div in your HTML file
const container = document.getElementById("root");

// 3. Create the React root using the container
const root = createRoot(container);

// 4. Inject and render the element
root.render(myElement);
