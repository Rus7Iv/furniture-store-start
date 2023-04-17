import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content_footer}>
          <div className={styles.profile}>
            <div className={styles.logo_area}>
              <span className={styles.logo_name}>Furniture</span>
            </div>
            <div className={styles.desc_area}>
              <p>Authors: Rus7Iv</p>
            </div>
            <div className={styles.social_media}>
              <a href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAZBJREFUWEftle8xBEEQxX8XATIgAyJABIgAEZABMiACREAGiIAMEAEZUO9qZ2vqXc9eX9VV7Zedb9vb0+/16z8zY8QzGxGbCXwU9SfZR5f9DLg3FjfAdWXbBH4Cpm/AQWB/BfbNvgX8ylbXXJdfzPEL2DHbM3Bktgg8ivcNbJe73nBitGGBTwABlhMFjcCjrM+Bhxa4fpwauIIcmu1vSeZLs3bZ9S1JPoPaCVwkyhkCV1+81/J2lzxGuF4juTz7IfBb4MISuAMuPaloyex2zN23rr2DfwB7QDQxajLFnHd4fVobLqq9Lks6ATm4YqopjxMl611a4Kqbxsw7XwREbEHCALSYNKqKtXCGdruyeBoImv0lpaRYWvYSOJK/BapZV21dLfmHBDKvWrTRnEDZXCqXCPsGDAlkwBVQBHxH1wR8w7UUk11bbn4y4MVXD8xVQ/NovbYI9CO7CrhwtQFFQs1Y17b1qkUle+z2wUqZe9JqLpVER6MUjlPw1Pa+q2aeHa+U3wSekmndTpPs61Y0Fe8fuFVRIA4107cAAAAASUVORK5CYII=" />
              </a>
              <a href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAiVJREFUWEftlkFOVUEQRc9fAbACIXEurkDZgOCcRFkBMHagJszBKRNgBbADNC5A2YHOmCErgBzTRfr3f/3e77yfMIBKSPgv3X3r3r5V1RMeMSaPiM0zeE39dWAXeAusNlzRP+A7cAZc1PbVZF8GPgN7DYC1pSaxA/wpF9TAjxLjW+A0Ze8h84aKbaXkl4DfwOt5wN34CxBYud3YGi/SBsm53wT2AUk9RBdzmX4AvgJfWlGB7STzTQJ7CZwk2deGwL0bM1emPtYq5DrN9SM79AD4lH6/A34CJmJMndnF/C6TrIu4JtSMmjIPJVUtJT4GrpOCrjFBv2+kKvi/rxXcstlMiH+TlCbxKn1TNdkJlodmfTMGXMaHwBXwsbgSe4DMTcwE3y8aPKSreUEFZK685ZpRzKP8lLqv00WllGU1CtyGcZ5cbe3XwtLUjN+K7jgKXMDLWqfKMonOWPaIUeCeHyW40uHmwI8eMVVSqbxGuT1Y6WYHRVlOIbnVoEcWWmq62Y4XXc0kZOp3PRFG7KqG0bLLRCAdHY0mZ9dV/73X0dfhHAIzMzidpqzxwIiHQ9/IDb8Mttdood6rLMdGlKkjemoedDGPxTKSfWms1mT0ib3fJ5Vt+SFqL5kwiLLrYje2htfiLPCKZK0hp4jUwF2o/DGtBG55RuVdUGDVnNk/9G53kvkXz6JW9irm/s6rGwIPMKULs+T/l8nk7AaVmhe8lfFc658u+D2+DI8g0XZg2QAAAABJRU5ErkJggg==" />{" "}
                {/* <box-icon name="instagram" type="logo"></box-icon> */}
              </a>
              <a href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAchJREFUWEftlv0xBEEQxd9FgAi4CBABIkAEZIAIEAEiQASIwMmADMiADNRvq2drdm5mdm72Pv65rrq6qtnZed3vve7ZkVYYoxViaw2+DPY3Je1K+nBgy6D9UNKZpBNJJHAr6YYEFgUOCICXknYCWh9sfe7gVOeqTEl5Jel+XpVT2YXRGlaJvgdBFvuSPoeAQ+uxpHNJaBrGjz2DCRLzo5V6Vs33vCpJIBYYClr5IYEfMNEmWwKeM094MAb7lvRoMoTJtWbro73EPJzxZ61DpST6LgmGYnEq6TXV5znzxA57s7ahWt59yQDz/tiYac7yaSdbsk5p6YNjKCh2VZS8C0Ods31wHkAddG8kaGMZ3ZhQv7anBJitHbPlNCcBXMn/toF8Wfs0PWpBq90VstWO1ZTmsYKpjESaqRQA4+rSOJI08TeXtFrscGi/LkW1fVueVFOGKz0LFjDmLIFBw9FbdbHUgD+bXzoJ19BeA97eZEM19/WmA0iGtfAC8XGmzJZrtZyeDtwBu36nLZ8SMyLKcA3tgGMeejwM1pl6fKu5IMnorK8BZxK6alMMMROcDJ2bbKjmpS2GF9xwiiZbU3kpeO++NXgvRYvY8A+pxUogttc73wAAAABJRU5ErkJggg==" />
              </a>
              <a href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAe1JREFUWEfFlu0xREEQRe9GgAgQASJABIiAEIgAESACRIAIEAEyIAJEQJ2tN69mZ3tmemZ/bFdt1dbumzn9cbv7TbREmyyRrV74nqQ/SauSfoYAPqLvrpha4CeSDiQBBmrZi6RHSfceRzxwYOcD1BWRpE9JF4MT2TM1+KmkKy/ReO5O0lkuCyU4B48XAIej75L2LQdy8NaIv4ZUB+Bu4jQ6OEoDseDU+NkZ8ZMkhBgUH45Rb3QS2+Wgg/E3C45iU88tX1A0YMssOA5uxo6mcC67dUa9VmgnC861Mw6ncGpDL9fs1Wg9gCFjG5L4pEYLEv3UUjipWamR0wgkbUt6c5zjkR1JdMAMvEVoqXi6zsaRd10wRNt1NoYfSnoopC5eHAwgPsGob6x8vq9n7rqRxBxpSjtTijb0GMLKwceStaS9Bc66zZkJZ01+Fw554TXlM2Zp6blWK003akw6Mfo8LgE1D0sorX8az5jt3gnX22rFCUfqia42aHrh44Cx0s5vnnXaA2cD0s6j5fZ5bca3wtn3CHFm9ebgpB9BbWXU3wL/HZbQdJ57IucZHCAD1m73womYVM+BczVPHfS8lVizPfeWU6156kDoXcRIJ5Qip52uc9F6054bdggHi1MZXh68s396Qe29vTBtF/9rqfB/ScBxIAe0sDkAAAAASUVORK5CYII=" />
              </a>
              <a href="#">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAg1JREFUWEfll/0xBEEQxd9FgAgQASJABGSADGSACBABIkAEiAARkAEioH5XM1u9vT27s+fU/aGrrrZqd3re64/pNzfRAm2yQGzNCr4j6VvSmqT3FMCrpM8xwYwB35e0J4nncgHkUdKdpJsaIjXgRHkiiWetkYHjRKLoMwTOBue1iME6snBUykIf+LWkg18AZ9cXSbsRgRL4oaSrOQDnLegFCLQsAqe2D2bVfWoyGo0ybPeQ+kprSDfrbQBnkk6tbwQOSwvgnSBHKv2x8u99EKzfMkezc869A0Q7jCvLEe3FEaSkU/ORR002T3CiXymB83HJREYNmWKjJpfxj4Ih9ZStFTkgby6ll6mBKjPdWdZbRpv2edY7s2AMfzhKTRkXAd5k86/Bq9O+KenZpehppKD4okfaEKYdR9/tvGu6c4auQ+tXnR9jlkHWOeeMRTTbWlEYBsiUhKkptR8yVlC4mdCtMK/S50SmT/97Jxz+OVUwpz4XLhsIDST94GEdEly65bB3k/Io7byzHcqxQImo0UaKrMXepB4Vu+0pRWdglfTc1ms9RZmvURCJxm00ITMXSoh/y6/vJpOllYbjKjSdxwPGjdYb+pDltvVt6A5nM0Av8KPm1DcyD07E9EdIfAgcAJwBy2pXklg/x3O/FBWxBhwCbMy0gghP5kFkRMiPJs1/JoqVqgUfqvVM3/8v+A/IHH0g5hURbgAAAABJRU5ErkJggg==" />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.footer_bottom}>
          <div className={styles.copy_right}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAApJJREFUWEfFl/1RVFEMxQ8VQAdABWgFSAVqBWgFaAVgBWAFagVqBWAFQAXYgVCBzI9JdvKyyb77+IfM7OzHu7knOTnJvbulF7StF8TWc8HfSPovaUfSvSVwGz4P5bQEHMBjSe8MtAL4JYnXjxH0EfBXks4lAT5qfyV9tkBanznwD5K+JW/oJbur8DsBEtzbtPa7pI8d+iZwHKHZDSrPJJFVZ2jgk722bRFBHlUOHXjM+EES38l21GCC4A/MoWSgAsfx2pwAhs6bUdSwDhbI2gNAAxdxnwoch0Nb9L7ImE1PLChvNdoNZn6ndtuzwCkBa/bj8wxOlpcGTI2hOxrfUT6glcEQAUddxBJ+Md08+WbwKDKi7DbBl5J4OZypKmDWss+uvbNvCQ41UEQ7UXs3Mr2zjAFF9bF+PGf4EHxlrKVU2GsPOmYeKZ/QY2Cn5rwmnAYw/lzu3YHTl3GIuAjJuqv3XAycBdgqsQgObT9tQQantrTMn4VjNgbk4F9tCE0EF6npMkc4K8HMpZqeb8w8gue6RsHkwEZiiIOrpJ1a/rOdGBaUwS060xEEkKceA6Wb+8x75gO2Gly5z5lSnExr08hay9uFTRChi5JACZATrGo318xEsBm8nUYWdT7pMuVsThCRgXZqVrPdp1FHL5sxZHyqEQCgsJaPXErJuPaBNZmaFXhsOeiivn5Py5nGO1wlPC8jz1Yt5gu78zzSWx0WcwonKG5ALlrGNYxNkth0k4lHK04oduRiCAjKdqopCZ2wxt7cHS4LDD34DZVpF1sRDSDYeCCVGc/RHmklY4Tkd7I5yv05Ncav08vwnwa/GJIZ53JnnerL9XO0V07Q6kKKakeYSy6Zw5mPUr1o3XMyXwSwafEj6hahIPSd8BkAAAAASUVORK5CYII=" />
            <span>2023 UDSU</span>
          </div>
          <div className={styles.tou}>
            <a href="#">Term of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Policy</a>
            <a href="#">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { Container } from "react-bootstrap";
// import styles from "../styles/Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <Container>
//         <p className="text-center text-muted mb-0">
//           © {new Date().getFullYear()} Your Company, Inc.
//         </p>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
