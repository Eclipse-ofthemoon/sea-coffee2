import logo from './logo.svg';
import './App.css';

function blog() {

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
    <div className="blog">
      <h1>Блог</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Новости</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Акции и предложения</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">О продукте</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Статьи</a>
        </li>
      </ul>
    </div>
    
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="sourse/images/Anapa.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Открытие новой кофейни!</h5>
            <p className="card-text">Теперь мы в Анапе! Недавно прошло открытие нового заведения на берегу моря - Sea Coffee</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="sourse/images/sort.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Новый сорт кофе</h5>
            <p className="card-text">В нашей кофейне появился новый сорт кофе - Либерика. Приходите и пробуйте необычные сочетания вкусов! </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="sourse/images/cheesscake.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Волна ванили</h5>
            <p className="card-text">Пушистый чизкейк с ванильным кремом, украшенный морской пеной. Новый десерт представлен в сети кофеен в Сочи.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="sourse/images/Den-borby-s-rakom.png.crdownload" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Добро</h5>
            <p className="card-text">Купи кофе или десерт в любой кофейне своего города и половина суммы пойдет в фонд борьбы с раком.</p>
          </div>
        </div>
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

export default blog;
