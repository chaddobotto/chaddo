# CHUD BOT へようこそ！

このプロジェクトは、唯一無二の「COPEスコア」搭載フレームワーク「CHUD BOT」の公式リポジトリです。

## 特徴
- 独自のCOPEスコアシステムで本当の価値を測定
- わざと複雑なアーキテクチャ（知能テスト！）
- ドキュメント最小限（本物の開発者向け）
- 週67ダウンロード（選ばれし者のみ）
- 後方互換性なし、常に進化

## インストール
```
npm install @chud/core
```
もし失敗した場合：
```
npm install @chud/core --force --legacy-peer-deps
```
それでも動かない場合は、環境を見直してください。

## 使い方
```js
import { createChud } from '@chud/core';
const bot = createChud({ cope: 'maximum', denial: true, projection: 'aggressive' });
const result = await bot.cope();
console.log(result); // undefined（仕様です！）
```

## コアパッケージ
- @chud/core
- @chud/cope
- @chud/denial
- @chud/projection
- @chud/seethe
- @chud/dilate

## 注意
- ドキュメントが少ないのは仕様です。ソースを読んでください。
- 動かない場合は、あなたの環境が悪いだけです。

## ライセンス
MIT（コードを盗んだら訴えます！）
