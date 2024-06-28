import logo from './logo.svg';
import './App.css';
import './bgvideo.css'

function Footer() {

return (
<footer className="mt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-12 footer-text text-center">
          <p>Все права защищены 2024</p>
        </div>
        <div className="col-lg-4 col-md-12 footer-text text-center">
          <p>Контакты<br />Работа<br />Команда</p>
        </div>
        <div className="col-lg-4 col-md-12 media-links">
          <a className="nav-link" href="https://youtu.be/-z6ocWvtHqY?si=HcDZ_Hq916KoNAD3">
            <img style={{'width': '40px', 'margin-inline': '1em'}} src={require('./images/yt.png')} alt="..." />
          </a>
          <a className="nav-link" href="https://t.me/morecoffee_to_go">
            <img style={{'width': '40px', 'margin-inline': '1em'}} src={require('./images/tg.png')} alt="..." />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;