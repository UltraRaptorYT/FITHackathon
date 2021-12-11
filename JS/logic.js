filter = () => {
  let dropChild = document.getElementById("dropdownMenuButton").children;
  for (i in dropChild) {
    myLevel = dropChild[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      console.log(dropChild[i].getAttribute("value"));
      break;
    }
  }
  let dropChild2 = document.getElementById("dropdownMenuButton2").children;
  for (i in dropChild2) {
    myLevel = dropChild2[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      console.log(dropChild2[i].getAttribute("value"));
      break;
    }
  }
  return;
};

showBooks = (type) => {
  if (type == "All") {
    $.getJSON("../JSON/store.json", (data) => {
      console.log(data);
    });
  }
  document.getElementById("books");
};

// check = () => {
//   if (
//     !document
//       .getElementById("dropdownMenuButton")
//       .getAttribute("class")
//       .split("")
//       .includes("visible")
//   ) {
//     dropChild = document.getElementById("dropdownMenuButton").children;
//     for (i in dropChild) {
//       myLevel = dropChild[i].getAttribute("class").split(" ");
//       if (myLevel.includes("active")) {
//         console.log(dropChild[i].getAttribute("value"));
//         return dropChild[i].getAttribute("value");
//       }
//       // if (dropChild[i])
//     }
//   }
// };

// check2 = () => {
//   if (check() in levelDict) {
//     console.log("hi");
//   }
//   if (
//     !document
//       .getElementById("dropdownMenuButton2")
//       .getAttribute("class")
//       .split("")
//       .includes("visible")
//   ) {
//     dropChild = document.getElementById("dropdownMenuButton2").children;
// for (i in dropChild) {
//   myLevel = dropChild[i].getAttribute("class").split(" ");
//   if (myLevel.includes("active")) {
//     console.log(dropChild[i].getAttribute("value"));
//   }
//   // if (dropChild[i])
// }
//   }
// };

// Remove Select Level From Drop Down
document.getElementById("dropdownMenuButton").addEventListener("click", () => {
  let dropChild = document.getElementById("dropdownMenuButton").children;
  for (i in dropChild) {
    place = dropChild[i].getAttribute("value");
    if (place == "placeholder") {
      dropChild[i].remove();
    }
  }
});
document.getElementById("dropdownMenuButton2").addEventListener("click", () => {
  let dropChild = document.getElementById("dropdownMenuButton2").children;
  for (i in dropChild) {
    place = dropChild[i].getAttribute("value");
    if (place == "placeholder") {
      dropChild[i].remove();
    }
  }
});
