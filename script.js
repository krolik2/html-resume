let data = [
  "HTML",
  "JavaScript",
  "CSS",
  "Git",
  "React",
  "Redux",
  "Tailwind",
  "SASS",
  "REST",
  "GraphQL",
  "Unit Tests",
  "TypeScript",
  "Python",
];
let list = document.getElementById("skills");

let elements = `${data
  .map(
    (data) => `<span class="text-white bg-accent p-2 px-4 font-bold rounded">${data}</span>`
  )
  .join("")}`;

list.innerHTML = elements;
