const imgs = document.getElementById("imgs");
const ncupd = document.getElementById("ncupd");
const ckslc = document.getElementById("ckslc");
const left = document.getElementById("left");
const right = document.getElementById("right");
const show = document.getElementById("showBackground");
const head = document.getElementById("head");
const pictures = document.getElementById("pictures");
const ncupdImgNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ckslcImgNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let imgNum = 1;

function updateImage() {
  imgs.style.opacity = 0;

  setTimeout(() => {
    if (ncupd.checked) {
      imgs.src = `images/ncupd/ncupd${ncupdImgNum[imgNum - 1]}.jpg`;
    } else if (ckslc.checked) {
      imgs.src = `images/ckslc/ckslc${ckslcImgNum[imgNum - 1]}.jpg`;
    } else {
      console.error("No radio button selected");
    }

    imgs.style.opacity = 1;
  }, 500);
}
ncupd.addEventListener("change", () => {
  imgNum = 1;
  updateImage();
});
ckslc.addEventListener("change", () => {
  imgNum = 1;
  updateImage();
});

left.addEventListener("click", () => {
  imgNum--;
  if (imgNum < 1) {
    imgNum = ncupd.checked ? ncupdImgNum.length : ckslcImgNum.length;
  }
  updateImage();
});

right.addEventListener("click", () => {
  imgNum++;
  if (ncupd.checked && imgNum > ncupdImgNum.length) {
    imgNum = 1;
  } else if (ckslc.checked && imgNum > ckslcImgNum.length) {
    imgNum = 1;
  }
  updateImage();
});

function preloadImages() {
  ncupdImgNum.forEach((num) => {
    const img = new Image();
    img.src = `images/ncupd/ncupd${num}.jpg`;
  });

  ckslcImgNum.forEach((num) => {
    const img = new Image();
    img.src = `images/ckslc/ckslc${num}.jpg`;
  });
}

window.onload = preloadImages;

show.addEventListener("click", () => {
  if (head.style.display !== "none") {
    head.style.display = "none";
    pictures.style.display = "none";
    show.textContent = "Show Memes";
  } else if (head.style.display == "none") {
    head.style.display = "flex";
    pictures.style.display = "flex";
    show.textContent = "Show Background";
  }
});
