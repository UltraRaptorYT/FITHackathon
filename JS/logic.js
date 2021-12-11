function filter() {
  let dropChild = document.getElementById("dropdownMenuButton").children;
  for (i in dropChild) {
    var myLevel = dropChild[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      var level = dropChild[i].getAttribute("value");
      // console.log(level);
      break;
    }
  }
  let dropChild2 = document.getElementById("dropdownMenuButton2").children;
  for (i in dropChild2) {
    var myLevel = dropChild2[i].getAttribute("class").split(" ");
    if (myLevel.includes("active")) {
      var subject = dropChild2[i].getAttribute("value");
      // console.log(subject);
      break;
    }
  }
  showBooks(level, subject);
}

showBooks = (level, subject) => {
  var title = [];
  var url = [];
  var qty = [];
  $.getJSON("../JSON/store.json", (data) => {
    if ((level == "placeholder" || level == "All") && subject == "") {
      for (lvl in data) {
        for (subj in data[lvl]) {
          for (test in data[lvl][subj]) {
            title.push(data[lvl][subj][test].name);
            url.push(data[lvl][subj][test].url);
            qty.push(data[lvl][subj][test].qty);
          }
        }
      }
    } else {
      for (lvl in data) {
        if (data[lvl] == level) {
          for (subj in data[lvl]) {
            if (data[lvl][subj] == subject) {
              console.log("here");
              title.push(data[lvl][subj][test].name);
              url.push(data[lvl][subj][test].url);
              qty.push(data[lvl][subj][test].qty);
            }
          }
        }
      }
    }
    for (var i = 0; i < title.length; i++) {
      document.getElementById("books").innerHTML += `
<div class="col-md-3 col-12 p-3 mx-1 mx-md-0 bg-white d-flex flex-column justify-content-center align-items-center" style="border-radius: 20px; gap:10px;">
                <img src="${url[i]}">
                <div class="d-flex justify-content-center align-items-center " style="gap:30px"><h6 class="m-0" id="title${i}">${title[i]}</h6><h6 class="m-0" id="qty${i}" >${qty[i]} </h6></div>
              </div>`;
      if (qty[i] <= 20) {
        var qtyid = "qty" + [i];
        var titleid = "title" + [i];
        document.getElementById(titleid).style.color = "red";
        document.getElementById(titleid).style.fontWeight = "bold";
        document.getElementById(qtyid).style.color = "red";
        document.getElementById(qtyid).style.fontWeight = "bold";
      }
    }
  });
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
