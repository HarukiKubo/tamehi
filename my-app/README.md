# 都道府県別の総人口推移グラフ

このプロジェクトは、RESAS API を使用して日本の都道府県別の人口推移グラフを表示する SPA（シングルページアプリケーション）です。道府県を選択し、総人口、年少人口、生産年齢人口、老年人口の推移をグラフ上で確認することができます。

## 概要

- **機能**:
  - 都道府県の一覧を API から動的に作成し、チェックボックスで表示
  - 選択された都道府県の人口推移を表示
  - 人口タイプ（総人口、年少人口、生産年齢人口、老年人口）の切り替え
- **技術スタック**:
  - <img src="https://img.shields.io/badge/{Next.js}-{#000000}.svg?logo={nextdotjs}">
  - <img src="https://img.shields.io/badge/{React}-{#61DAFB}.svg?logo={react}">
  - <img src="https://img.shields.io/badge/{TypeScript}-{#3178C6}.svg?logo={typescript}">
  - <img src="https://img.shields.io/badge/{SWR}-{#000000}.svg?logo={swr}">
  - <img src="https://img.shields.io/badge/{Tailwind CSS}-{#06B6D4}.svg?logo={tailwindcss}">
  - <img src="https://img.shields.io/badge/{CSS Modules}-{#000000}.svg?logo={cssmodules}">
  - Recharts

## 動作環境

- Node.js: バージョン 14.x 以上
- npm

## 環境構築方式

1. 依存関係をインストールします。

   ```sh
   npm install
   ```

   または

   ```sh
   yarn install
   ```

2. 環境変数ファイルを作成します。

   プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の内容を追加します。

   ```plaintext
   NEXT_PUBLIC_RESAS_API_KEY=your_api_key_here
   ```

3. 開発サーバーを起動します。

   ```sh
   npm run dev
   ```

   または

   ```sh
   yarn dev
   ```

4. ブラウザで `http://localhost:3000` を開きます。
