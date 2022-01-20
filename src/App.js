import './App.css';
import Navbar from './navbar/Navbar.js';
import Header from './header-img/Header.js';
import facebookLogo from "./facebook-logo.png"
import LeftContentTop from './left-content-top/Left-content-top.js';
import Links from './links/Links.js';
import LeftFooter from './left-content-footer/Left-content-footer.js';
import CenterTop from "./center-top-content/Center-top-content.js"
import RightContent from "./right-content/Right-content.js"
import Center1 from './center-1/center-1.js';
import Center2 from './center-2/center-2.js';
import Center3 from './center-3/center-3.js';
import Center4 from './center-4/center-4.js';

function App() {
  return (
    <div className="body">
      <Navbar />
      <Header />
      <div className="container">
        <div class="facebook-logo">
          <img className="facebookimg" src={facebookLogo} alt="error" />
        </div>
        <div className="left-bottom-content-wrapper">
          <LeftContentTop />
          <Links />
          <LeftFooter />
        </div>

        <div className="center-content-wrapper">
          <CenterTop />
          <Center1 />
          <Center2 />
          <Center3 />
          <Center4 />
        </div>
        <RightContent />
      </div>
    </div>
  );
}

export default App;