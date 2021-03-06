const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const addImg = document.querySelector("ul#gallery");

// let galleryArr = [];

// images.forEach(el => {
//     const elLi = document.createElement("li");
//     const elImg = document.createElement("img");
//     elImg.setAttribute("src", `${el.url}`);
//     elImg.setAttribute("alt", `${el.alt}`);
//     elLi.classList.add("li-img")
//     elLi.appendChild(elImg);
//     galleryArr.push(elLi);
    
// });

const arrImg = images.map(el => {
    const elLi = document.createElement("li");
    const elImg = document.createElement("img");
    elImg.setAttribute("src", `${el.url}`);
    elImg.setAttribute("alt", `${el.alt}`);
    elLi.classList.add("li-img")
    elLi.appendChild(elImg);
    return elLi;
})

addImg.prepend(...arrImg);