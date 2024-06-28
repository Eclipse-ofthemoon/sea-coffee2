import logo from './logo.svg';
import './App.css';
import './bgvideo.css'

function Header() {

return (
  <div>
    <div className='nav'>
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"><img src={require('./Untitled.png')} alt="Кофейня у моря" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">О кофейне</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">Магазин</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:+79233647942">Контакты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">Блог</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://youtu.be/-z6ocWvtHqY?si=HcDZ_Hq916KoNAD3">
                  <img style={{'width': '35px', 'margin-inline': '1em'}} src={require('./yt.png')} alt="..." />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://t.me/morecoffee_to_go">
                  <img style={{'width': '25px', 'margin-inline': '1em'}} src={require('./tg.png')} alt="..." />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</div>
  );
}

export default Header;