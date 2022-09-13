# Tailwindcss-sample

<!-- リンク -->

・Tailwindcss 導入 1.https://tailwindcss-com.translate.goog/docs/installation?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc

<!-- ターミナル -->

npm install -D tailwindcss
npx tailwindcss init

<!-- テンプレート パスを構成する　-->

※作成された tailwind.config.js を書き換え

module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}

<!-- CSS に Tailwind ディレクティブを追加する
 -->

src フォルダを作成し、その中に input.css を作成する
その中に
@tailwind base;
@tailwind components;
@tailwind utilities;
を記載

<!-- Tailwind CLI ビルド プロセスを開始する  -->

package.json を以下に変える
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build":"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
},
