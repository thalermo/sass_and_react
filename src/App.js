import './main.css';

import pink_lady_vid from './assets/videos/ekaterina-bolovtsova.mp4';
import pink_lady_img from './assets/images/pink_lady_img.png';
import sass_logo from './assets/images/sass-icon.svg';
import { useState } from 'react';

function App() {
  const [state] = useState({
    video: pink_lady_vid,
    poster: pink_lady_img,
    logo: sass_logo,
  });

  return (
    <div className="App">
      <h1 className="h1">
        Explain Sass 💅
        <p className="h1__sub-tittle">Syntactically Awesome Stylesheet</p>
      </h1>

      {/* logo block */}
      <div className="log logo_theme_islands">
        <img src={state.logo} alt="logo" className="logo__img" />
      </div>

      {/* user block  */}
      <div className="user user_theme_islands">
        <video
          src={state.video}
          autoPlay
          className="user__vid"
          loop
          muted
          // height="100%"
          poster={state.poster}
        />
      </div>
    </div>
  );
}

export default App;
