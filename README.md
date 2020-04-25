# tombo gokuraku portfolio
tombo gokurakuのポートフォリオサイト

**[myportfolio](https://tombo-gokuraku.github.io/portfolio/)**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `gatsby develop`
development modeでアプリケーションを起動する
[http://localhost:8000/](http://localhost:8000/)で確認できる

### `gatsby build`
アプリケーションをプロダクション用にビルドする

### `gatsby serve`
プロダクション用ビルドを[http://localhost:9000/](http://localhost:9000/)にホスティングする
Lighthouseなどを実行して、パフォーマンスなどを確認する時に使う

## Change Log

### v1.0
[STUDIO](https://tombo-gokuraku.studio.design/)でデザインし、HTML/Vanilla CSSでコーディングした。

### v1.1
SASS(SCSS)でスタイリングし直した

### v1.2
create-react-appを使って、Reactで作り直した

### v1.3
styled-componentsを使って、スタイリングをやり直した

### v1.4
サイトをNetlifyにホスティングした。
FormをGoogleFormからNetlifyFormに変更した。

## Todo

### v1.5(GatsbyでSSG)
225m

#### Gatsbyのチュートリアルをやる
90m->60+107+90+58+87+89+96=587m
チュートリアルが思ったよりも長く、環境構築も難しかった。
まだLinter/Formatterもあんまり設定できていない

#### GatsbyでポートフォリオサイトをNetlifyにSSGする
90m->100+149+

##### Gatsby環境構築
90m->100m

##### ESLintの設定
90m->89+60=149m

##### App.jsからLayout.jsに改名
5m->5m
##### SEOコンポーネントを作成し、title, metadateを入力する
15m->14m
##### PWAに対応する
15m->7m
##### Netlifyにホスティングする
45m->25m
* NetlifyのBuild Settingsを変更する
* package.jsonのscriptsをGatsby向けに変更する
* README.mdのAvailable Scriptsも変更する

##### Incremental Buildの設定をする
60m

#### GatsbyでポートフォリオサイトをGitHub PagesにSSGする(おまけ)
45m


### v1.6(デザインのリメイク)

### v1.7(GoogleAnalyticsを導入する)

### v1.8(下層ページにブログを取り込む)
GatsbyでCMS付きサイトが作れるようになって、独自ドメインの取得とか、Adsense、SEO周りのことが分かってからやる
