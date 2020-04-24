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
    fontawesomeIcon: faTwitter,
    color: "#00acee"
  },
  {
    hrefLink: "https://www.youtube.com/channel/UCUVOtxzJS6kiIhDo1CEW4Og",
    ariaLabel: "Youtube",
    fontawesomeIcon: faYoutube,
    color: "#c4302b"
  },
  {
    hrefLink: "https://github.com/tombo-gokuraku",
    ariaLabel: "GitHub",
    fontawesomeIcon: faGithub,
    color: "#333"
  }
];

export default socialLinkData;
