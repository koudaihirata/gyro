ジャイロを使用してみた


参考：
https://kkblab.com/make/javascript/gyro.html

コンパスのような絵を作るときに参考にした：
・clearRect(x, y, width, height) -> 透明な黒 (rgb(0 0 0 / 0%)) に設定できる
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/clearRect

・beginPath() -> キャンパスに新しいパスを作成するためのキャンバス 2D API
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/beginPath

・arc(x, y, radius, startAngle, endAngle, counterclockwise) -> サブパスに円弧を加えれる
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/arc

・Math.PI -> 円周と直径の比率、およそ 3.14159
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

・stroke() -> 現在のあるいは渡されたパスを、現在の線のスタイルで描画する
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/stroke

・moveTo(x, y) -> 新しいサブパスや複数のサブパスの作成ができる
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/moveTo

・lineTo(x, y) -> 指定された (x, y) 座標に向けて直線を描画する
https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/lineTo