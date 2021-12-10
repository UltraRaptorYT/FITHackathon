check = () => {
  if (
    !document
      .getElementById("dropdownMenuButton")
      .getAttribute("class")
      .split("")
      .includes("visible")
  ) {
    dropChild = document.getElementById("dropdownMenuButton").children;
    for (i in dropChild) {
      myLevel = dropChild[i].getAttribute("class").split(" ");
      if (myLevel.includes("active")) {
        console.log(dropChild[i].getAttribute("value"));
        return dropChild[i].getAttribute("value");
      }
      // if (dropChild[i])
    }
  }
};

check2 = () => {
  if (check() in levelDict) {
    console.log("hi");
  }
  if (
    !document
      .getElementById("dropdownMenuButton2")
      .getAttribute("class")
      .split("")
      .includes("visible")
  ) {
    dropChild = document.getElementById("dropdownMenuButton2").children;
    for (i in dropChild) {
      myLevel = dropChild[i].getAttribute("class").split(" ");
      if (myLevel.includes("active")) {
        console.log(dropChild[i].getAttribute("value"));
      }
      // if (dropChild[i])
    }
  }
};

fuck = () => {
  console.log("I luv Kaleb");
};

document.getElementById("dropdownMenuButton").addEventListener("click", check);
document
  .getElementById("dropdownMenuButton2")
  .addEventListener("click", check2);

// document.getElementById("dropdownMenuButton").innerHTML = `
// <div class="option active placeholder" data-value="placeholder">
//   Select Level:
// </div>
// `
