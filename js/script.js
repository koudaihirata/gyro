const alphaElement = document.getElementById('alpha');
const betaElement = document.getElementById('beta');
const gammaElement = document.getElementById('gamma');
const requestPermissionBtn = document.getElementById('requestPermissionBtn');
let alpha = 0, beta = 0, gamma = 0; 
let canvas = document.getElementById("canvas"); // ★canvas要素を取得 
let context = canvas.getContext("2d");          // ★絵を描く部品を取得



// ローカルストレージから許可状態を確認
const gyroPermissionGranted = localStorage.getItem('gyroPermissionGranted');

// ジャイロセンサーのデータを取得する関数
  window.addEventListener('deviceorientation', (event) => {
    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
  });

let timer = window.setInterval(() => {
    displayData();      // displayData 関数を実行
    drawOrientation();  // 方向を描く
}, 33); 

  function displayData() {
    var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
    txt.innerHTML = "alpha: " + alpha + "<br>"  // x軸の値
                + "beta:  " + beta  + "<br>"  // y軸の値
                + "gamma: " + gamma;          // z軸の値
}

// コンパスのような絵を描く drawOrientation 関数
function drawOrientation() {
    var centerX = canvas.width  / 2;            // canvasの中心のX座標
    var centerY = canvas.height / 2;	        // canvasの中心のY座標
    var radius  = 100;                          // 枠円の半径および針の長さ
    var radianAlpha = -alpha * Math.PI / 180;    // 角度をラジアンに変換 ( - で逆転させている)
    context.clearRect(0, 0, canvas.width, canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
    context.beginPath();                        // 描画開始
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);  // 枠円を描く
    context.strokeStyle = "rgb(0, 0, 0)";       // 枠円の線の色
    context.lineWidth = 2;                      // 線の太さ
    context.stroke();                           // 線を描画
    context.beginPath();                        // 描画開始
    context.moveTo(centerX, centerY);           // 中心に移動
    // 線を引く（cosでx座標、sinでy座標が得られる。長さradiusを掛ける。-90度すると真上に向く。）
    context.lineTo(centerX + Math.cos(radianAlpha - Math.PI / 2) * radius,
                centerY + Math.sin(radianAlpha - Math.PI / 2) * radius);
    context.strokeStyle = "rgb(255, 0, 0)";     // 針の線の色
    context.lineWidth = 5;                      // 線の太さ
    context.stroke();                           // 線を描画
}


// 許可済みならすぐにジャイロセンサーを開始
if (gyroPermissionGranted === 'true') {
//   startGyro();
} else {
  // 許可が未設定の場合はボタンを表示
  requestPermissionBtn.style.display = 'block';
}

// ボタンクリックでジャイロセンサーの許可をリクエスト
requestPermissionBtn.addEventListener('click', () => {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          // 許可されたらローカルストレージに保存し、ジャイロセンサーを開始
          localStorage.setItem('gyroPermissionGranted', 'true');
          requestPermissionBtn.style.display = 'none'; // ボタンを隠す
        //   startGyro();
        } else {
          alert('ジャイロデータへのアクセスが拒否されました。');
        }
      })
      .catch(console.error);
  }
});
