# ジャイロを使用してみた

参考：https://kkblab.com/make/javascript/gyro.html<br>
<br>

## コンパスのような絵を作るときに参考にした：<br>

* [clearRect(x, y, width, height)](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/clearRect) -> 透明な黒 (rgb(0 0 0 / 0%)) に設定できる<br>
<br>

* [beginPath()](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/beginPath) -> キャンパスに新しいパスを作成するためのキャンバス 2D API<br>
<br>

* [arc(x, y, radius, startAngle, endAngle, counterclockwise)](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/arc) -> サブパスに円弧を加えれる<br>
<br>

* [Math.PI](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) -> 円周と直径の比率、およそ 3.14159<br>
<br>

* [stroke()](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/stroke) -> 現在のあるいは渡されたパスを、現在の線のスタイルで描画する<br>
<br>

* [moveTo(x, y)](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/moveTo) -> 新しいサブパスや複数のサブパスの作成ができる<br>
<br>

* [lineTo(x, y)](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/lineTo) -> 指定された (x, y) 座標に向けて直線を描画する
