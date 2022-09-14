# majiang-core

麻雀基本ライブラリ

## インストール
```sh
$ npm i @mj/core
```

## 使用法
```javascript
const Majiang = require('@mj/core');
```

## 提供機能
| クラス名            | 機能                                 |
|:--------------------|:-------------------------------------|
| ``Majiang.Shoupai`` | 手牌を表現するクラス                 |
| ``Majiang.Shan``    | 牌山を表現するクラス                 |
| ``Majiang.He``      | 捨て牌を表現するクラス               |
| ``Majiang.Util``    | シャンテン数計算、和了点計算ルーチン |
| ``Majiang.Game``    | 局進行を実現するクラス               |
| ``Majiang.Board``   | 卓に関する情報を表現するクラス       |
| ``Majiang.Player``  | 対局者を実現する基底クラス           |

- [API仕様](https://github.com/Tanimodori/mj-core/wiki)

## ライセンス
[MIT](https://github.com/Tanimodori/mj-core/blob/master/LICENSE)

## 作者
[Satoshi Kobayashi](https://github.com/kobalab)
