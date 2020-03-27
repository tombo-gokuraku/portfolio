# tombo gokuraku portfolio
tombo gokurakuのポートフォリオサイト
[STUDIO](https://tombo-gokuraku.studio.design/)でデザインし、HTML/Vanilla CSSでコーディングした。

**[myportfolio](https://tombo-gokuraku.github.io/portfolio/)**

## 反省
### 良かった所
* 見積もりをした

作業前に作業工程を列挙し、それぞれの工程にどれくらいの時間を要するか予想した。
おかげで作業の順番が最適化され、自分がどれくらい計画錯誤しているのか分かった。

* スマホ版のナビゲーションをハンバーガーアイコンではなく、Bottom Navigationを使った

ハンバーガーアイコンのclickイベントを取らなくてよくなったので、単純にJavaScriptを書く必要がなくなった。
(あくまで個人的には)ハンバーガーアイコンよりもBottom Navigationの方が押しやすい。

### 悪かった所
* クラス名に統一感がない

containerだったりcontentだったりする。

* 詳細度を増やすことで無理やりスタイリングしている箇所がある

SASSの使用を検討しても良いかもしれない。むしろ、次回はSASSを使って構築してみるとかどうだろう。

* Google Formのiframeの高さを取ってこれないと知らずに時間を浪費した

GoogleがCORSを許可していないので不可能。
知らなかったし、仕方ない。
[ちゃんと勉強しよう](https://stackoverflow.com/questions/19009849/auto-height-for-iframe-containing-embedded-published-google-doc)

* 問い合わせフォームがGoogleForm

本当はちゃんとしたフォームを作りたいけど、phpとか知らんし、書きたくもない。
netlifyとか使うと割と手軽にformが作れるっぽい?

[【Netlify】Forms機能を利用して問い合わせフォームを作成する](https://qiita.com/NaokiIshimura/items/bce2f0b865ec1bc16a53)
[netlify docs](https://docs.netlify.com/forms/setup/#html-forms)

ちょっとしたハックでGoogleFormに直接データを送れることが分かった。
https://github.com/toperkin/staticFormEmails/blob/e269a7fab2828fb04d83b2961777872c1a124263/README.md
これで自分でform要素を作れるのでstyleを当てられる。

## Todo
予想終了時間ETA(estimated time of arrival),
実際の終了時間ATA(the actual time of arrived)
として表記している

ETA: 170+30+165=365m=6h5m
->
ATA: 222+29+184=435m=7h15m

計画錯誤率:
435/365 = 1.2

### PC向けデザイン
ETA: 170m
->
ATA: 44+175+3 = 222m

#### header
ETA: 45m
->
ATA: 44m

#### main
ETA: 120m
->
ATA: 29m+81m+32m+33m = 175m

##### hero
ETA: 30m
->
ATA: 29m

##### ABOUT
ETA: 30m
->
ATA: 81m

##### SKILLS
ETA: 30m
->
ATA: 32m

##### CONTACT
ETA: 30m
->
ATA: 33m

#### footer
ETA: 5m
->
ATA: 3m

### Refactoring
ETA: 30m
->
ATA: 29m

### Responsive Design
ETA: 165m
->
ATA: 10+120+54=184m

#### BreakPointを決める
ETA: 30m
->
ATA: 10m

1280px, 960px, 600px

[material-ui](https://material-ui.com/customization/breakpoints/)

[material design Breakpoint system](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)

#### BreakPointごとにスタイリング
ETA: 90m
->
ATA: 9+12+99m = 120m

##### 1280pxのスタイリング
ETA: 30m
->
ATA: 9m

##### 960pxのスタイリング
ETA: 30m
->
ATA: 12m

##### 600pxのスタイリング
ETA: 30m
->
ATA: 10+89=99m

#### Bottom Navigationを追加
ETA: 45m
->
ATA: 54m
