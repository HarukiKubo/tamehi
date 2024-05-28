const path = require("path");

module.exports = {
  entry: "./src/index.js", // ここにあなたのアプリケーションのエントリーポイントを指定します
  output: {
    path: path.resolve(__dirname, "dist"), // ここに出力先ディレクトリを指定します
    filename: "bundle.js", // ここに出力されるバンドルファイルの名前を指定します
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScript ファイルにのみこのルールを適用します
        exclude: /node_modules/, // node_modules ディレクトリ内のファイルは除外します
        use: {
          loader: "babel-loader", // Babel を使用して JavaScript をトランスパイルします
        },
      },
    ],
  },
};
