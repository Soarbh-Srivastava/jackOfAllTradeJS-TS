import "./styles.scss";

const links = [];

function checkUrl(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "http://" + url;
  }
  return url;
}

function showLinks() {
  if (links.length === 0) {
    alert("No links available");
    return;
  }

  let result = "";

  links.forEach((link, index) => {
    result += `${index}: ${link.title} (${link.url}) - Author: ${link.author}\n`;
  });

  alert(result);
}

let running = true;

while (running) {
  const option = prompt(`
Choose an option:
1 : Show all links
2 : Add a new link
3 : Remove a link
4 : Exit
`);

  switch (option) {
    case "1":
      showLinks();
      break;

    case "2":
      const title = prompt("Enter title:");
      let url = prompt("Enter URL:");
      const author = prompt("Enter author:");

      url = checkUrl(url);

      links.push({
        title,
        url,
        author,
      });

      alert("Link added!");
      break;

    case "3":
      if (links.length === 0) {
        alert("No links to remove");
        break;
      }

      showLinks();

      const index = Number(prompt("Enter link index to remove:"));

      if (index >= 0 && index < links.length) {
        links.splice(index, 1);
        alert("Link removed!");
      } else {
        alert("Invalid index");
      }

      break;

    case "4":
      running = false;
      alert("Goodbye!");
      break;

    default:
      alert("Invalid option");
  }
}
