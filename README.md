# ジャイロを使用してみた


参考：https://kkblab.com/make/javascript/gyro.html<br>
<br>

## コンパスのような絵を作るときに参考にした：<br>

* [Notion](https://great-magnesium-f57.notion.site/2024-de381d7a9587484280668524b35efdfb?pvs=4)
* [clearRect(x, y, width, height)](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/clearRect) -> 透明な黒 (rgb(0 0 0 / 0%)) に設定できる<br>
<br>
* beginPath() -> キャンパスに新しいパスを作成するためのキャンバス 2D API<br>
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/beginPath<br>
<br>
* arc(x, y, radius, startAngle, endAngle, counterclockwise) -> サブパスに円弧を加えれる<br>
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/arc<br>
<br>
* Math.PI -> 円周と直径の比率、およそ 3.14159<br>
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/PI<br>
<br>
* stroke() -> 現在のあるいは渡されたパスを、現在の線のスタイルで描画する<br>
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/stroke<br>
<br>
* moveTo(x, y) -> 新しいサブパスや複数のサブパスの作成ができる<br>
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/moveTo<br>
<br>
* lineTo(x, y) -> 指定された (x, y) 座標に向けて直線を描画する<br>
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/lineTo<br>
