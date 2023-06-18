const imageContainer = document.getElementById("imageContainer");
const image = document.getElementById("image");
const imageSources = [
    "img/cookie/container/img0.png",
    "img/cookie/container/img1.png",
    "img/cookie/container/img2.png",
    "img/cookie/container/img3.png",
    "img/cookie/container/img4.png",
    "img/cookie/container/img5.png",
    "img/cookie/container/img6.png",
    "img/cookie/container/img7.png",
    "img/cookie/container/img8.png",
    "img/cookie/container/img9.png",
    "img/cookie/container/img10.png",
    "img/cookie/container/img11.png",
    "img/cookie/container/img12.png",
    "img/cookie/container/img13.png",
    "img/cookie/container/img14.png",
    "img/cookie/container/img15.png",
    "img/cookie/container/img16.png",
    "img/cookie/container/img17.png",
    "img/cookie/container/img18.png",
    "img/cookie/container/img19.png",
    "img/cookie/container/img20.png",
    "img/cookie/container/img21.png",
    "img/cookie/container/img22.png",
    "img/cookie/container/img23.png",
    "img/cookie/container/img24.png",
    "img/cookie/container/img25.png",
    "img/cookie/container/img26.png",
    "img/cookie/container/img27.png",
    "img/cookie/container/img28.png",
    "img/cookie/container/img29.png",
    "img/cookie/container/img30.png",
    "img/cookie/container/img31.png",
    "img/cookie/container/img32.png",
    "img/cookie/container/img33.png",
    "img/cookie/container/img34.png",
    "img/cookie/container/img35.png",
    "img/cookie/container/img36.png",
    "img/cookie/container/img37.png",
    "img/cookie/container/img38.png",
    "img/cookie/container/img39.png",
    "img/cookie/container/img40.png",
    "img/cookie/container/img41.png",
    "img/cookie/container/img42.png"
];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % imageSources.length; // 다음 이미지 인덱스 계산

  image.src = imageSources[currentIndex]; // 이미지 변경

  setTimeout(changeImage, 1000); // 1초마다 이미지 변경
}

changeImage();
