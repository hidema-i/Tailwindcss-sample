# Tailwindcss-sample

<!-- リンク -->

・Tailwindcss 導入 1.https://tailwindcss-com.translate.goog/docs/installation?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc

<!-- ターミナル -->

npm install -D tailwindcss
npx tailwindcss init

<!-- テンプレート パスを構成する -->

※作成された tailwind.config.js を書き換え

module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}
