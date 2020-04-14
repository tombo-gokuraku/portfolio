# todo log
これまでのtodoの作業時間や反省点などをまとめた

### v1.0(HTML & Vanilla CSSでコーディング)
予想終了時間ETA(estimated time of arrival),
実際の終了時間ATA(the actual time of arrived)
として表記している

ETA: 170+30+165=365m=6h5m
->
ATA: 222+29+184=435m=7h15m

計画錯誤率:
435/365 = 1.2

#### PC向けデザイン
ETA: 170m
->
ATA: 44+175+3 = 222m

##### header
ETA: 45m
->
ATA: 44m

##### main
ETA: 120m
->
ATA: 29m+81m+32m+33m = 175m

###### hero
ETA: 30m
->
ATA: 29m

###### ABOUT
ETA: 30m
->
ATA: 81m

###### SKILLS
ETA: 30m
->
ATA: 32m

###### CONTACT
ETA: 30m
->
ATA: 33m

##### footer
ETA: 5m
->
ATA: 3m

#### Refactoring
ETA: 30m
->
ATA: 29m

#### Responsive Design
ETA: 165m
->
ATA: 10+120+54=184m

##### BreakPointを決める
ETA: 30m
->
ATA: 10m

1280px, 960px, 600px

[material-ui](https://material-ui.com/customization/breakpoints/)

[material design Breakpoint system](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)

##### BreakPointごとにスタイリング
ETA: 90m
->
ATA: 9+12+99m = 120m

###### 1280pxのスタイリング
ETA: 30m
->
ATA: 9m

###### 960pxのスタイリング
ETA: 30m
->
ATA: 12m

###### 600pxのスタイリング
ETA: 30m
->
ATA: 10+89=99m

##### Bottom Navigationを追加
ETA: 45m
->
ATA: 54m

#### 反省

##### 良かった所
* 見積もりをした

作業前に作業工程を列挙し、それぞれの工程にどれくらいの時間を要するか予想した。
おかげで作業の順番が最適化され、自分がどれくらい計画錯誤しているのか分かった。

* スマホ版のナビゲーションをハンバーガーアイコンではなく、Bottom Navigationを使った

ハンバーガーアイコンのclickイベントを取らなくてよくなったので、単純にJavaScriptを書く必要がなくなった。
(あくまで個人的には)ハンバーガーアイコンよりもBottom Navigationの方が押しやすい。

##### 悪かった所
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


### v1.1(SCSSでスタイリング)
333m -> 298m
計画錯誤率 298/333 = 0.89
目標より早く終わった。BEMの--modifierを使って、これまで共通化できていなかったスタイルをまとめられたのが大きかった。
後半にいくにしたがって作業量が減っていったことも良かった。
#### cssからSCSSにスタイルをコピーする
3m -> 8m
#### header
60m -> 75m+23m=98m

#### navigationとBottomNavigationの統合
45m -> 47m

#### link-icon
30m -> 10m

#### hero
30m -> 29m

#### about
30m -> 56m

#### skills
30m -> 25m

#### contact
30m -> 5m

#### 変数,extend,mixinなどでまとめる
45m -> 3m

##### ブレイクポイントの編集とブレイクポイントに合わせたスタイリング
30m -> 17m
メディアクエリをまとめる
https://itnext.io/writing-media-queries-with-sass-mixins-3ea591ea3ea4
```scss
@mixin for-xs {
  @media (min-width: 0px) { @content; }
}

@mixin for-sm {
  @media (min-width: 600px) { @content; }
}

@mixin for-md {
  @media (min-width: 960px) { @content; }
}

@mixin for-lg {
  @media (min-width: 1280px) { @content; }
}

@mixin for-xl {
  @media (min-width: 1920px) { @content; }
}
```

### A11yの改善
Lighthouseを実行したらA11yが58しかなかったので、修正して80くらいにはする
#### `<html>` element does not have a [lang] attribute
`<html lang="ja">` を追加した

#### Form elements do not have associated labels
`<label for="entry.872297108">メールアドレス:</label>`のように`<label>`を追加した

#### Links do not have a discernible name
スクリーンリーダーに読めるように`aria-label`を追加する
例)
```html
<a
  href="https://twitter.com/Tombo__Gokuraku"
  class="link__container"
  aria-label="Twitter"
  target="_blank"
  rel="noopener"
  ><i class="fab fa-twitter link__icon"></i>
  <span class="link__text">Twitter</span>
</a>
```

https://stackoverflow.com/questions/51683761/how-to-fix-lighthouse-links-do-not-have-a-discernible-name
https://dequeuniversity.com/rules/axe/3.1/link-name?application=lighthouse

#### Lists do not contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).
下のように`<ul>`の直下に`<li>`が挿入されるように変更した
```html
<ul class="navigation__menu">
  <li class="navigation__item">
    <i class="navigation__icon fas fa-address-card"></i>
    <a class="navigation__text" href="#about" aria-label="go to ABOUT"
      >ABOUT</a
    >
  </li>
```
https://dequeuniversity.com/rules/axe/3.1/list?application=lighthouse
https://web.dev/list/

#### List items `<li>` are not contained within `<ul>` or `<ol>` parent elements.
上記と同様の対策をした
この時点でA11yが100になった

### v1.2(Reactで作り直し)
475m->13+59+190+11+38+10+19+7+3+24+44+10=428m
計画錯誤率 = 428/475 = 0.90
FlexBoxのflex-growをしっかり理解していなかったせいで、Navigationコンポーネントでかなり時間を取られた
それ以外はコンポーネント化によって、記述量が減ったお陰で想定よりも早いペースでコーディングできた。
途中からもっと良いサイトデザインが頭に浮かび始め、コーディングに対するモチベーションが下がった。
しかし、とりあえず、完成させることを優先させる方が良いと判断した。
styled-componentsもろくに触れない状況でデザインだけ凝っても、大して再利用性の高いコンポーネントは作れないと考えた。
サイトデザインに関しては一通りstyled-componentsやSSG、ホスティングができるようになってから、じっくりFigmaで作ろうと思う。

#### CSS Reset or Normalizeをかける
30m->13m

#### Formコンポーネントを作る
60m->59m

#### Headerコンポーネントを作る
30+45m30=105m->146+33+11m=190m

##### Navigationコンポーネントを作る
45m->12+74+60=146m
FlexBoxで要素の横幅を親要素いっぱいになるように調整するのに手間取った。
`align-items: stretch`とか`align-content: stretch`とか色々試したけど、結局、`flex-grow: 1`で目的が達成されそう。イマイチ、FlexBoxが分からない。
flex-directionがrowなのかcolumnなのかで、justify-contentの配置する軸が変わることに気づくのに時間がかかった。

##### SocialLinkコンポーネントを作る
30m->33m

#### heroコンポーネントを作る
45m->11m

#### Sectionコンポーネントを作る
60m->38m

#### ABOUTを作る
30m->10m

#### SKILLSを作る
30m->19m

#### CONTACTを作る
30m->7m

#### Footerを作る
10m->3m

#### GitHub Pagesにホスティング
15m->24m
feature/craをmasterにマージする
リポジトリ設定のGitHub Pagesの項目で、Sourceを `gh-pages branch`に設定する

#### manifest.jsonを書き直す
30m->44m
https://developer.mozilla.org/ja/docs/Web/Manifest
https://web.dev/add-manifest-react/

#### Ralewayを入れる
30m->10m
https://stackoverflow.com/questions/41676054/how-to-add-fonts-to-create-react-app-based-projects
https://create-react-app.dev/docs/adding-images-fonts-and-files/
https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project


### v1.3(styled-componentsでスタイリング)
515m=42+27+144+27+86+1+1+40+5+5=378
計画錯誤率: 378/515=0.73
目標より早く終わったのは良いが、Sectionコンポーネントのスタイリングのタスクが予定の2倍近くになったのは良くなかった。何かの問題に詰まったというよりは単純に工数の見積もりが甘かった。元Sectionコンポーネントだけでなく、その関連コンポーネントにどれくらい時間がかかりそうか、もう少し突っ込んで計画しておくべきだった。
逆にSectionコンポーネントのスタイリングが上手くいったお陰でAboutやSkillsは単純な置き換えで全てが解決した点は良かった。


#### normalize.css, createGlobalStyleを使ってCSS Resetをかける
30m->42m
https://pagepro.co/blog/moving-best-scss-practices-to-styled-components-part-1/

#### fontの設定
30m->27m

#### Header
30+45+45=120m->12+26+106=144m

##### Navigation
45m->5+21=26m

##### SocialLink
45m=4+32+25+25+20=106m
Reset DOMにスタイリングするのに手間取った
https://styled-components.com/docs/basics#styling-any-component

#### Hero
30m->27m

#### Section
45m->86m
* Section関連のコンポーネントをまとめて1つのファイルにする

#### About
30m->1m

#### Skills
30m->1m

#### Contact
30+45=75m->23+17=40m

##### GoogleForm
45m->17m

#### Footer
5m->5m

#### GitHub Pagesにホスティング
15m->5m

### v1.4(Netlifyにホスティング)
75m->90+25+162=277m
計画錯誤率: 277/75=3.69
formって難しいね...
NetlifyFormの仕様に振り回された

#### create-react-appをNetlifyにホスティングできるようにする
30m->90m
#### Netlifyのホスティング設定をする
15m->25m
#### FormをNetlifyに送るように変更する
30m->71+91=162m
