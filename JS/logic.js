filter = () => {
  let dropChild = document.getElementById("dropdownMenuButton").children;
  for (i in dropChild) {
    myLevel = dropChild[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      var level = dropChild[i].getAttribute("value");
      console.log(dropChild[i].getAttribute("value"));
      break;
    }
  }
  let dropChild2 = document.getElementById("dropdownMenuButton2").children;
  for (i in dropChild2) {
    myLevel = dropChild2[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      var subject = dropChild2[i].getAttribute("value");
      console.log(dropChild2[i].getAttribute("value"));
      break;
    }
  }
  return;
};

loopThruImg = (data, level, subject) => {
  for (i in data) {
    if (level in data) {
      for (j in data[i])  {
        if (subject in data[i]) {
          return subject.url
        }
      }
    }
  }
};

showBooks = (lvl, sub) => {
  $.getJSON("../JSON/store.json", (data) => {
    console.log(data);
    if (lvl == "All" || (lvl == "placeholder" && sub == "")) {
      console.log("Hi");
    } else if (lvl == "P1" || (lvl == "placeholder" && sub == "")) {
      loopThruImg(data, "P1", )
    } else if (lvl == "P2" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "P3" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "P4" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "P5" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "P6" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "S1" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "S2" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "S3" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "S4" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "J1" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    } else if (lvl == "J2" || (lvl == "placeholder" && sub == "")) {
      loopThruImg()
    }
  });
  
  document.getElementById("books");
};


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


