# tombo gokuraku portfolio
tombo gokurakuのポートフォリオサイト

**[myportfolio](https://tombo-gokuraku.github.io/portfolio/)**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`
GitHub Pagesにmasterブランチのソースをbuildして`gh-pages`ブランチとしてホスティングする。

## Change Log

### v1.0
[STUDIO](https://tombo-gokuraku.studio.design/)でデザインし、HTML/Vanilla CSSでコーディングした。

### v1.1
SASS(SCSS)でスタイリングし直した

### v1.2
create-react-appを使って、Reactで作り直した

## Todo

### v1.3(styled-componentsでスタイリング)
515m

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
45m
* Section関連のコンポーネントをまとめて1つのファイルにする

#### About
30m

#### Skills
30m

#### Contact
30+45=75m

##### GoogleForm
45m

#### Footer
5m

#### GitHub Pagesにホスティング
15m

### v1.4(Netlifyにホスティング)
* create-react-appをNetlifyにホスティングできるようにする
* Netlifyのホスティング設定をする
* FormをNetlifyに送るように変更する

### v1.5(GatsbyでSSG)

### v1.6(デザインのリメイク)
