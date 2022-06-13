import React from "react";
import "./Portfolio.css";
import "../../App.css";
import atom from "../../img/atom.png";
import profile1 from "../../img/profile1.jpg";
// import profile1 from "../../img/atom.png";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">

      {/* -----heading----- */}

      <div className="heading-container">
        <div className="heading-board">
          <img src={atom} alt="" className="icon"/>
          <h2>Portfolio</h2>
        </div>
      </div>

      {/* -----main----- */}

      <div className="pf-main-container">
        <ul>
          <li>
            <h4>オリジナル雑貨・ハンコECサイト</h4>
            <div className="module-spacer-s"/>
            <img src={profile1} alt="my-ecsite-demo" />
            <h5>説明</h5>
            <p>ReactとNode.jsで作ったECデモサイト。
              今後妻がオリジナル雑貨とイギリスの手作り雑貨をメインに実際に運用していく予定。</p>
            <h5>使用技術</h5>
            <p>React Redux Node.js FIrebase
              CloudFunctions SendGridAPI StripeAPI </p>
            <div className="module-spacer-s"/>
            <p><a href="">github</a></p>
          </li>
          <li>
            <h4>ホテル検索アプリ(楽天API)</h4>
            <div className="module-spacer-s"/>
            <img src={profile1} alt="my-app-searching-hotel" />
            <h5>説明</h5>
            <p>Reactエンジニアとして活躍するトラハックさんが開催したTypeScriptブートキャンプに参加して作ったデモアプリ</p>
            <h5>使用技術</h5>
            <p>React Redux TypeScript Node.js FIrebase
              CloudFunctions 楽天API </p>
              <div className="module-spacer-s"/>
            <p><a href="">github</a></p>
          </li>
        </ul>
      </div>
      <div className="module-spacer-l"/>
      <div className="module-spacer-l"/>
      <div className="module-spacer-l"/>
    </div>



  );
};

export default Portfolio;