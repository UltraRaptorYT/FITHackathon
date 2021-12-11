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
  return [level,subject];
};

loop_json = function (data, filter) {
  for(lvl in data){
    if(level == lvl){
      for(subj in lvl){
        if(subject == subj){
          var title = subj.name
          var url = subj.url
          var qty = sub.qty
        }
      }
    }
  }
  return(title,url,qty)
};

console.log(loop_json)

showBooks = (lvl, sub) => {
  $.getJSON("../JSON/store.json", (data) => {
    console.log(data);
    
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


