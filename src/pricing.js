import logo from './logo.svg';
import './App.css';
import './cart.css'


function pricing() {

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
            <button className="cart" id="cart">
            <img className="cart__image" style="width: 35px; margin-inline: 1em;" src={require('./images/cart.png')} alt="Cart" />
            <div className="cart__num" id="cart_num">0</div>
          </button>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section>
    <div className="pricing">
      <h1>Ассортимент</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="pricing.html">Сочи</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Краснодар</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Анапа</a>
        </li>
      </ul>
    </div>
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-2">
        </div>

        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <a href="#"><img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" /></a>
                <div className="card-body">
                  <h5 className="card-title"><a href="#">Coffee</a></h5>
                  <p className="card-text"><a href="#">
                    Some quick example text to build on the card title and make up the bulk of the
                      card's
                      content.
                  </a></p>
                  <a href="zacaz.html" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="VR" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Coffee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="card">
                <img src="sourse/images/6a6a798fd85bd00d33b48adc0e4e1c61.jpeg" className="card-img-top" alt="Coffee" />
                <div className="card-body">
                  <h5 className="card-title">Other</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                  <a href="#" className="btn btn-outline-primary">Заказать</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 text-center mt-4">
            <p>У вас есть вопросы? Звоните</p>
          </div>
          <div className="col-lg-12 col-md-12 text-center">
            <a href="tel:+79233647942">
            <img className="call-anim" style="width: 40px;" src="sourse/files/phone.png" alt="..." />
          </a>
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

export default pricing;