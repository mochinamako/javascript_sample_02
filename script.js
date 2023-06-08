// JavaScript Sample

//背景色を変える
function MyFunctionR(){
    const obj = document.body;
    obj.style.backgroundColor = '#FFBFAF';
  }
  
  function MyFunctionG(){
    const obj = document.body;        
    obj.style.backgroundColor = '#AEFFC9';
  }
  
  function MyFunctionB(){
    const obj = document.body;
    obj.style.backgroundColor = '#8EA4FF';
  }

  //引数を用いた背景色の変更  一つの関数で複数の処理に対応する
function MyFunction05( color ){
    const obj = document.body;
    obj.style.backgroundColor = color;
  }

  //ランダムな16進6桁のカラーコードを生成（汎用性のある関数）
function randomColor() {
    let col = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    for (let i = col.length; i < 6; i++) {
      col = '0' + col;
    }
    return '#' + col;
  }
  
  // 背景色の変更
  function MyFunction06(){
    const obj = document.body;
    obj.style.backgroundColor = randomColor();
  }