// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");
//   for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//      li.textContent = (i + 1).toString();
//      ul.append(li);
//     }

//     element.append(ul);

const element = document.getElementById("main");
element.remove();
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "You've changed what's on the screen!";
// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;

// element.className = "pet-listing dog";

// element.classList.remove("dog");
// element.classList.add("cat", "sale");


// document.querySelector('main').remove();


const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent ='Iris is the champion';

document.body.append(newHeader);