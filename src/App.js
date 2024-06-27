import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div>
  <header>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><img src="sourse/files/Untitled.png" alt="Кофейня у моря" /></a>
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
                <img style={{'width': '35px', 'margin-inline': '1em'}} src="sourse/files/yt.png" alt="..." />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://t.me/morecoffee_to_go">
                <img style={{'width': '25px', 'margin-inline': '1em'}} src="sourse/files/tg.png" alt="..." />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section>
    <div className="bgvideo">
      <video src="sourse/files/video-bg.mp4" type="video/mp4" autoplay muted loop></video>
      <div className="effect"></div>
      <div className="video-text">
        <h1>Кофе и море</h1>
      </div>
    </div>


    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-1">
        </div>

        <div className="col-lg-8 col-md-12">
          <div className="row">

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                  aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                  aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                  aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                  aria-label="Slide 8"></button>


              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/photo.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>Sea Coffee – уютная кофейня, где аромат свежесваренного кофе сливается
                          с морским бризом. Наша цель – создать атмосферу спокойствия и умиротворения, чтобы каждый
                          гость
                          мог насладиться моментом.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/b3b7bc3a56cabd29c03abd84ee4a25b0.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>Здесь каждый десерт – это настоящее волшебство, сплетенное из морских приключений и нежных
                          вкусов.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/2c737bc295b8241e24d45ea90ea85d53.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>Мы хотим, чтобы каждая чашка нашего кофе была плотной, с высокой сладостью, при этом с
                          приятной кислинкой и послевкусием.

                          Нам удалось достичь этого, используя для напитков на основе эспрессо смесь из двух сортов:
                          Бразилия Суль-де-Минас и Эфиопия Амару Амхару.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/877def82293689.5d1990951dcef.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>В нашей кофейне мы гордимся разнообразием меню, которое удовлетворит вкусы каждого гостя.
                          Независимо от того, любите ли вы классический эспрессо, ароматный латте или предпочитаете
                          авторские напитки – у нас есть что-то для каждого. А еще мы рады предложить вам вкусные
                          десерты и закуски. Приходите и наслаждайтесь! </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/tsutsvts.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>Наши кофейни расположены по всему побережью Черного моря. Сеть кофеен в Сочи и Краснодаре.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="sourse/images/d4c0b5dcad997257eec2bc55217d83c8.png" className="w-100" alt="..." />
                      </div>
                      <div className="col-lg-6 col-md-6 slide-text">
                        <p>Вам нужно поработать, но не хотите сидеть в скучном офисе? Приходите в нашу кофейню, где
                          каждый стол – это место для творчества и продуктивности.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col-lg-12 col-md-12 text-center mt-4">
              <button type="button" className="btn btn-outline-primary btn-lg my-4"><a className="nav-link"
                  href="blog.html">Узнать больше</a></button>
            </div>
            <div>
              <h3>Расположение кофеен</h3>
              {/* <script type="text/javascript" charset="utf-8" async
                src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A09d82f1cbfccf8176a2880904e1554560ca0c20a9d1322aa39634caa55497858&amp;width=900&amp;height=459&amp;lang=ru_RU&amp;scroll=true"></script> */}
            </div>
            <div className="col-lg-12 col-md-12 text-center mt-4">
              <p>У вас есть вопросы? Звоните</p>
            </div>
            <div className="col-lg-12 col-md-12 text-center">
              <a href="tel:+79233647942">
                <img className="call-anim" style={{'width': '40px'}} src="sourse/files/phone.png" alt="..." />
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12">
          <div className="row px-2">
            <div className="col-lg-12 sidebar my-4">
              <p>На протяжении нескольких веков люди придумывали, как лучше всего готовить кофе и с чем его смешивать,
                чтобы получилось вкусно. В результате мы имеем огромный выбор классических и авторских рецептов кофейных
                напитков. Многие из которых можно научиться готовить дома. <a href="blog.html">Читать дальше</a></p>
            </div>
            <div className="col-lg-12 sidebar my-4">
              <p> У нас сейчас действует специальная акция: при заказе любого кофейного напитка вы получаете бесплатный
                десерт на выбор. Не упустите шанс насладиться вкусом кофе и сладкой выпечки! <a href="blog.html">Читать
                  дальше</a></p>
            </div>
            <div className="col-lg-12 sidebar my-4">
              <p>Наша кофейня оборудована современными и высококачественными устройствами для приготовления кофе.
                Расскажем
                некоторые из них: <a href="blog.html">Читать дальше</a></p>
            </div>
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
            <img style={{'width': '40px', 'margin-inline': '1em'}} src="sourse/files/yt.png" alt="..." />
          </a>
          <a className="nav-link" href="https://t.me/morecoffee_to_go">
            <img style={{'width': '40px', 'margin-inline': '1em'}} src="sourse/files/tg.png" alt="..." />
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

export default App;
