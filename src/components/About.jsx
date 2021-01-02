import React from "react";
import { ModeContext } from "../context/ModeContext";
import ModeAPIButton from "./ModeAPIButton";
function About(props) {
  const modeContextAPI = React.useContext(ModeContext);
  const { backgroundColor, textColor, mode } = modeContextAPI.modeObj;
  return (
    <div className={`${backgroundColor} ${textColor}`}>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6">
            <img
              className="img-fluid rounded-bottom"
              src="https://www.gotceleb.com/wp-content/uploads/photos/taylor-swift/promo-pics-for-her-sixth-album-reputation-2017/Taylor-Swift:-Promo-Pics-for-her-sixth-album-Reputation-2017--04.jpg"
            />
          </div>
          <div className="col-md-6 align-self-center mt-lg-0 mt-5">
            <h1>about</h1>
            <p>
              Taylor Alison Swift (born December 13, 1989) is an American
              singer-songwriter, record producer, actress, music video director,
              philanthropist and businesswoman.
            </p>
            <p>
              In 2006, she released her debut single "Tim McGraw", then her
              self-titled debut album, which was subsequently certified
              multi-platinum by the Recording Industry Association of America.
              In November 2008, Swift released her second album, Fearless, and
              the recording earned Taylor four Grammy Awards, including the
              Grammy Award for Album of the Year, at the 52nd Grammy Awards.
              Fearless and Taylor Swift finished 2008 at number-three and
              number-six respectively, with sales of 2.1 and 1.5 million.
              Fearless topped the Billboard 200 for 11 non-consecutive weeks.
              Swift was named Artist of the Year by Billboard Magazine in 2009.
              Swift released her third album Speak Now on October 25, 2010,
              which sold 1,047,000 copies in its first week.
            </p>
            <p>
              In 2008, her albums sold a combined four million copies, making
              her the best-selling musician of the year in the United States,
              according to Nielsen SoundScan. Forbes ranked Swift 2009's
              69th-most powerful celebrity with earnings of $18 million, 2010's
              12th-most powerful celebrity with earnings of $45 million and
              2011's 7th-most powerful celebrity with earnings of $45 million,
              too. Swift was ranked the 38th Best Artist of the 2000s by
              Billboard. In January 2010 Nielsen SoundScan listed Swift as the
              most successful digital artist in music history with over 34.3
              million digital tracks sold. On June 2011, renowned site The Boot
              named Swift and Carrie Underwood The Country Royalty, as they were
              the only female country artists to be ranked on Rolling Stone's
              Queens of Pop list. March 2011, she has sold over 20 million
              albums and 34.3 million singles worldwide. She has been listed in
              the 2012 Guinness World Records|Guinness Book Of World Records as
              the Fastest Selling Digital Album by a Female Artist for her album
              Speak Now, and Most Simultaneous U.S. Hot 100 Hits by a Female
              Artist. In 2011, Billboard named her woman of the year. She is
              also so far the youngest female artist to receive the prestigious
              Album of the Year award twice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
