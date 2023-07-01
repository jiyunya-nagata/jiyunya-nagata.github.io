let slideshow = document.querySelector(".slideshow");
let slides = slideshow.getElementsByTagName("img");
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentIndex);
  updateText(currentIndex);
});

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
  updateText(index);
}

function nextSlide() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentIndex);
});

let textList = [
  '高嶺山 早朝風景 手前のハイエースは流星群を電波観測していますね！',
  'M27:アレイ星雲',
  'M31:アンドロメダ銀河',
  'M33:さんかく銀河',
  'M42:オリオン大星雲',
  'M45:プレアデス星団（すばる）',
  'IC434:馬頭星雲 NGC2024:燃える木星雲',
  '半月 クレータには天文学者や宇宙飛行士の名前が付けられたりしますね😊',
  '皆既月食',
  '2023年3大流星群 快晴でしたら夜に暗い場所で空を見てみてください🌟',
];

// 画像が切り替わるたびにこの関数を呼び出すようにします
function updateText(index) {
  // 指定されたインデックスに対応するテキストを取得します
  let text = textList[index];
  
  // テキスト要素を取得してテキストを更新します
  let textElement = document.getElementById('text-below-slideshow');
  textElement.innerText = text;
}
