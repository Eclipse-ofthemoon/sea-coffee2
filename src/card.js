import logo from './logo.svg';
import './App.css';
import './card.css';

function card() {

  return (
  <div>
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"><img src={require('./images/Untitled.png')} alt="Кофейня у моря" /></a>
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
                  <img style={{'width': '35px', 'margin-inline': '1em'}} src={require('./images/yt.png')} alt="..." />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://t.me/morecoffee_to_go">
                  <img style={{'width': '25px', 'margin-inline': '1em'}} src={require('./images/tg.png')} alt="..." />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
<section>
  <div className="popup">
    <div className="popup__container" id="popup_container">
      <div className="popup__item">
        <h1 className="popup__title">Оформление заказа</h1>
      </div>
      <div className="popup__item" id="popup_product_list">
        <div className="popup__product">
          <div className="popup__product-wrap">
            <img
              src="./images/iphone-14-pro-max-gold.png"
              alt="Apple IPhone 14 Pro Max 256Gb"
              className="popup__product-image"
            />
            <h2 className="popup__product-title">
              jbjnknmlkinli
            </h2>
          </div>
          <div className="popup__product-wrap">
            <div className="popup__product-price">135000</div>
            <button className="popup__product-delete"></button>
          </div>
        </div>
      </div>
      <div className="popup__item">
        <div className="popup__cost">
          <h2 className="popup__cost-title">Итого</h2>
          <output className="popup__cost-value" id="popup_cost">150000</output>
        </div>
        <div className="popup__cost">
          <h2 className="popup__cost-title">Скидка</h2>
          <output className="popup__cost-value" id="popup_discount">15000</output>
        </div>
        <div className="popup__cost">
          <h2 className="popup__cost-title">Итого со скидкой</h2>
          <output className="popup__cost-value" id="popup_cost_discount"
            >135000</output
          >
        </div>
      </div>
      <button className="popup__close" id="popup_close"></button>
    </div>
  </div>
</section>
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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</div>

  );
}

export default card;
