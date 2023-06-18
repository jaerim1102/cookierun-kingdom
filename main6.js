window.addEventListener('DOMContentLoaded', function() {
    // 링크 요소 선택
    var links = document.querySelectorAll('.menu a');
  
    // 링크 요소에 클릭 이벤트 추가
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 링크 동작 막기
  
        var target = document.querySelector(this.getAttribute('href')); // 대상 요소 선택
        var offsetTop = target.offsetTop; // 대상 요소의 상단 위치
  
        // 스크롤 애니메이션 실행
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  