// SocialLinkのデータをmapで処理して、一気に描画する

import {
  faTwitter,
  faYoutube,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const socialLinkData = [
  {
    hrefLink: "https://twitter.com/Tombo__Gokuraku",
    ariaLabel: "Twitter",
    fontawesomeIcon: faTwitter
  },
  {
    hrefLink: "https://www.youtube.com/channel/UCUVOtxzJS6kiIhDo1CEW4Og",
    ariaLabel: "Youtube",
    fontawesomeIcon: faYoutube
  },
  {
    hrefLink: "https://github.com/tombo-gokuraku",
    ariaLabel: "GitHub",
    fontawesomeIcon: faGithub
  }
];

export default socialLinkData;
