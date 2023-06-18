window.addEventListener('scroll', function(event) {
  var video = document.getElementById('myVideo'); // 'myVideo'라는 id를 가진 요소를 가져옵니다.
  var videoOffset = video.getBoundingClientRect().top; // 비디오 요소의 상단 위치를 가져옵니다.
  var windowHeight = window.innerHeight; // 현재 창의 높이를 가져옵니다.

  var originalWidth = parseInt(video.getAttribute('data-original-width')); // 비디오 요소의 원래 너비를 가져옵니다.
  var originalHeight = parseInt(video.getAttribute('data-original-height')); // 비디오 요소의 원래 높이를 가져옵니다.

  var videoWidth = video.offsetWidth; // 비디오 요소의 현재 너비를 가져옵니다.
  var videoHeight = video.offsetHeight; // 비디오 요소의 현재 높이를 가져옵니다.

  if (videoOffset < windowHeight) { // 비디오가 현재 보이는 창 안에 있을 때
    var scaleRatio = Math.min(windowHeight / videoHeight, 1); // 비디오의 높이를 창의 높이에 맞추어 비율을 계산합니다. 최대 비율은 1로 제한됩니다.

    var scrollDelta = window.scrollY - this.oldScrollY || 0; // 스크롤의 변화량을 계산합니다.
    var zoomIntensity = 0.2; // 확대/축소 강도를 조절하는 값입니다.

    if (scrollDelta > 0) { // 스크롤이 아래로 이동하는 경우
      scaleRatio *= (1 + zoomIntensity); // 비율에 확대 강도를 적용합니다.
      scaleRatio = Math.min(scaleRatio, 1); // 최대 확대 비율을 1로 제한합니다.

      // 최대 확대 시 스크롤 이벤트를 중지시킵니다.
      if (scaleRatio > 1) {
        event.preventDefault();
        event.stopPropagation();
      }
    } else if (scrollDelta < 0) { // 스크롤이 위로 이동하는 경우
      scaleRatio *= (1 - zoomIntensity); // 비율에 축소 강도를 적용합니다.
      scaleRatio = Math.max(scaleRatio, 0.1); // 최소 축소 비율을 0.1로 제한합니다.
    }

    video.style.transition = 'transform 0.3s ease'; // 변형 애니메이션을 위해 CSS transition을 설정합니다. 0.3초 동안 ease 함수로 애니메이션을 적용합니다.
    video.style.transform = 'scale(' + scaleRatio + ')'; // 비디오 요소에 변형을 적용하여 확대/축소합니다.
  }

  this.oldScrollY = window.scrollY; // 현재 스크롤 위치를 저장합니다.
})
