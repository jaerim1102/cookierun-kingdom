// const scrollingContent = document.querySelector('.scrolling-content');
// const text = ['새로운 텍스트', '다른 텍스트', '계속해서 변경되는 텍스트'];
// const images = ['img/cookie/container/img0.png', 'img/cookie/container/img1.png', 'img/cookie/container/img2.png'];

// // 스크롤링 내용 변경 함수
// function changeContent() {
//   scrollingContent.innerHTML = '';
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = text[Math.floor(Math.random() * text.length)];
//   scrollingContent.appendChild(newParagraph);
  
//   const newImage = document.createElement('img');
//   newImage.src = images[Math.floor(Math.random() * images.length)];
//   newImage.alt = '이미지 설명';
//   scrollingContent.appendChild(newImage);
// }

// // 스크롤 이벤트 추가
// scrollingContent.addEventListener('scroll', () => {
//   changeContent();
// });
