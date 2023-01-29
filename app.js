const items = [
  {
    id: 1,
    name: "pizza",
    price: "$ 200",
    stock: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus non ex tincidunt tincidunt. Vestibulum congue scelerisque nisi sed feugiat. Etiam maximus ultricies tellus sit amet maximus.",
  },
  {
    id: 2,
    name: "birra",
    price: "$ 200",
    stock: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus non ex tincidunt tincidunt. Vestibulum congue scelerisque nisi sed feugiat. Etiam maximus ultricies tellus sit amet maximus.",
  },
  {
    id: 3,
    name: "faso",
    price: "$ 200",
    stock: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus non ex tincidunt tincidunt. Vestibulum congue scelerisque nisi sed feugiat. Etiam maximus ultricies tellus sit amet maximus.",
  },
  {
    id: 4,
    name: "agua",
    price: "$ 200",
    stock: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel metus non ex tincidunt tincidunt. Vestibulum congue scelerisque nisi sed feugiat. Etiam maximus ultricies tellus sit amet maximus.",
  },
];

items.forEach((item) => {
  document.getElementById("main").innerHTML += `
    <div
        ${item.stock && `onclick="toggleDescription(${item.id})"`}
        id='item-${item.id}' 
        class=${`${item.stock ? "item-card" : "disable-item"}`}>

            <div>${item.name}</div>
            <div>${item.price}</div>
            <div hidden class="hidden">${item.description}</div>
          
    </div>`;
});

function toggleDescription(itemId) {
  const descriptionElement = document.getElementById(
    `item-${itemId}`
  ).lastElementChild;
  if (descriptionElement.hasAttribute("hidden")) {
    descriptionElement.style = "display: flex";
    descriptionElement.removeAttribute("hidden");
  } else {
    descriptionElement.style = "display: none";
    descriptionElement.setAttribute("hidden", "");
  }
}
