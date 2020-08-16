
const layout = function(){
  /*main-nav*/
  let header = document.createElement('header');
  header.style.gridColumn = '1/3';
  header.style.gridRow = '1/2';
  header.style.background = 'grey';

  let ul = document.createElement('ul');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  let li4 = document.createElement('li');
  ul.style.width = "100%";
  ul.style.height = "100px";
  ul.style.position = "fixed";
  ul.style.background = "black";
  ul.style.margin = "0px";
  ul.style.listStyle = "none";
  ul.style.display = "flex";
  ul.style.justifyContent = "space-around";
  ul.style.flexDirection = "row";
  ul.style.alignItems = "center";
  /*Links*/
  let a1 = document.createElement('a');
  let a2 = document.createElement('a');
  let a3 = document.createElement('a');
  let a4 = document.createElement('a');
  a1.setAttribute("href", "./index2.js");
  a2.setAttribute("href", "#");
  a3.setAttribute("href", "#");
  a4.setAttribute("href", "#");
  a1.style.textDecoration = "none";
  a2.style.textDecoration = "none";
  a3.style.textDecoration = "none";
  a4.style.textDecoration = "none";
  a1.innerHTML = "JavaScript";
  a2.innerHTML = "Python";
  a3.innerHTML = "Java";
  a4.innerHTML = "C#";
  a1.style.color = "white";
  a2.style.color = "white";
  a3.style.color = "white";
  a4.style.color = "white";
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  header.appendChild(ul);
  /*section part*/
  let section = document.createElement('section');
  section.style.gridColumn = '1/2';
  section.style.gridRow = '2/3';
  section.style.background = 'grey';
  let aside = document.createElement('aside');
  aside.style.gridColumn = '2/3';
  aside.style.gridRow = '2/3';
  aside.style.background = 'grey';
  let footer = document.createElement('footer');
  footer.style.gridColumn = '1/3';
  footer.style.gridRow = '3/4';
  footer.style.background = 'black';
  let body = document.querySelector('body');
  /*Body style with grid*/
  body.style.display = 'grid';
  body.style.gridTemplateColumns = '1fr 1fr';
  body.style.gridTemplateRows = 'minmax(15em,auto) minmax(15em,auto) minmax(15em,auto)';
  body.style.gridGap= '10px';
  body.appendChild(header);
  body.appendChild(section);
  body.appendChild(aside);
  body.appendChild(footer);
}();
layout();


// const menu = function(){
//
//   let ul = document.createElement('ul');
//   let li1 = document.createElement('li');
//   let li2 = document.createElement('li');
//   let li3 = document.createElement('li');
//   let li4 = document.createElement('li');
//   ul.style.width = "100%";
//   ul.style.height = "100px";
//   ul.style.position = "fixed";
//   ul.style.background = "black";
//   ul.style.margin = "0px";
//   ul.style.listStyle = "none";
//   ul.style.display = "flex";
//   ul.style.justifyContent = "space-around";
//   ul.style.flexDirection = "row";
//   ul.style.alignItems = "center";
//   /*Links*/
//   let a1 = document.createElement('a');
//   let a2 = document.createElement('a');
//   let a3 = document.createElement('a');
//   let a4 = document.createElement('a');
//   a1.setAttribute("href", "./index2.js");
//   a2.setAttribute("href", "#");
//   a3.setAttribute("href", "#");
//   a4.setAttribute("href", "#");
//   a1.style.textDecoration = "none";
//   a2.style.textDecoration = "none";
//   a3.style.textDecoration = "none";
//   a4.style.textDecoration = "none";
//   a1.innerHTML = "JavaScript";
//   a2.innerHTML = "Python";
//   a3.innerHTML = "Java";
//   a4.innerHTML = "C#";
//   a1.style.color = "white";
//   a2.style.color = "white";
//   a3.style.color = "white";
//   a4.style.color = "white";
//   li1.appendChild(a1);
//   li2.appendChild(a2);
//   li3.appendChild(a3);
//   li4.appendChild(a4);
//   ul.appendChild(li1);
//   ul.appendChild(li2);
//   ul.appendChild(li3);
//   ul.appendChild(li4);
//   document.querySelector('body header').appendChild(ul);
// }();
// menu();
//
// const main = function(){
//   let main = document.createElement('main');
//   main.style.width = "100%";
//   main.style.height = "300px";
//   main.style.background = "yellow";
//   document.querySelector('body').appendChild(main);
// }();
// const footer = function(){
//   let footer = document.createElement('footer');
//   footer.style.width = "100%";
//   footer.style.height = "100px";
//   footer.style.background = "green";
//   document.querySelector('body').appendChild(footer);
// }();
// header();
// main();
// footer();
