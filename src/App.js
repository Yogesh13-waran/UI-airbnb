import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="sticky-top navBarContainer">
        <nav className=" sticky-top navBar">
          <div className="logo">
            <img src="./images/toppng.com-airbnb-a-icon-vector-logo-airbnb-logo-vector-699x751.png" alt="pico" />
            <span className="logoName"> airbnb</span>
          </div>
          <div className="centralNavigation">
            <div className="bold">Anywhere &nbsp; &nbsp;<span className="lighter">|</span></div>
            <div className="bold">Any week &nbsp; &nbsp;<span className="lighter">|</span></div>
            <div className="light">Add guests</div>
            <div className="searchLogo">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="15"
                height="24" viewBox="0 0 24 24" stroke-width="4" stroke="white" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </div>
            {/* <!-- <img src="./images/search.png" alt="picssName="searchLogo"> --> */}
          </div>
          <div className="rightPart">
            <div className="right-1 bold">Become a host</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width="19" height="24"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
              <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
            <div className="userOptions">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="18"
                height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="33"
                height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
              </svg>
              {/* <!-- <div className="redDot"></div> --> */}

            </div>
          </div>

        </nav>
        {/* <!-- navbar ended --> */}

        <div className="searchBarContainer">
          <nav className="searchBarNav sticky-top">
            <div className="searchBar">
              <div className="searchIcon">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="10" cy="10" r="7"></circle>
                    <line x1="21" y1="21" x2="15" y2="15"></line>
                  </svg>
                </div>
              </div>
              <div className="whereTo">
                <span className="bold">Where To</span>
                <div>
                  <span>Anywhere</span>
                  <span>.</span>
                  <span>Any week</span>
                  <span>.</span>
                  <span>Add guest</span>
                </div>
              </div>
              <div className="filter">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="14" cy="6" r="2"></circle>
                    <line x1="4" y1="6" x2="12" y2="6"></line>
                    <line x1="16" y1="6" x2="20" y2="6"></line>
                    <circle cx="8" cy="12" r="2"></circle>
                    <line x1="4" y1="12" x2="6" y2="12"></line>
                    <line x1="10" y1="12" x2="20" y2="12"></line>
                    <circle cx="17" cy="18" r="2"></circle>
                    <line x1="4" y1="18" x2="15" y2="18"></line>
                    <line x1="19" y1="18" x2="20" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <nav className="bottom-nav">
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sunset-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 13h1"></path>
              <path d="M20 13h1"></path>
              <path d="M5.6 6.6l.7 .7"></path>
              <path d="M18.4 6.6l-.7 .7"></path>
              <path d="M8 13a4 4 0 1 1 8 0"></path>
              <path d="M3 17h18"></path>
              <path d="M7 20h5"></path>
              <path d="M16 20h1"></path>
              <path d="M12 5v-1"></path>
            </svg>
            <p>Amazing views</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-eco" width="29" height="29" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20.002 11.002l-8.002 -8.002l-9 9h2v7a2 2 0 0 0 2 2h5"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215"></path>
              <path d="M16 22s0 -2 3 -4"></path>
              <path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z"></path>
            </svg>
            <p>Farms</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-windmill" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z"></path>
              <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z"></path>
              <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z"></path>
              <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z"></path>
            </svg>
            <p>Wind mills</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="26" height="26" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <rect x="10" y="12" width="4" height="4"></rect>
            </svg>
            <p>Tiny homes</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-beach" width="26" height="26" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0"></path>
              <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z"></path>
              <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196"></path>
              <path d="M15 9l-3 5.196"></path>
              <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25"></path>
            </svg>
            <p>Beaches</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78"></path>
              <path d="M20.004 11.004l-8.004 -8.004l-9 9h2v7a2 2 0 0 0 2 2h4"></path>
              <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>
            </svg>
            <p>Cabins</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-crazy-happy" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="7" y1="8.5" x2="10" y2="11.5"></line>
              <path d="M7 11.5l3 -3"></path>
              <line x1="14" y1="8.5" x2="17" y2="11.5"></line>
              <path d="M14 11.5l3 -3"></path>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
            </svg>
            <p>Amazing</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fountain" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 16v-5a2 2 0 1 0 -4 0"></path>
              <path d="M15 16v-5a2 2 0 1 1 4 0"></path>
              <path d="M12 16v-10a3 3 0 0 1 6 0"></path>
              <path d="M6 6a3 3 0 0 1 6 0"></path>
              <path d="M3 16h18v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2z"></path>
            </svg>
            <p>National parks</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
              <line x1="13" y1="7" x2="13" y2="7.01"></line>
              <line x1="17" y1="7" x2="17" y2="7.01"></line>
              <line x1="17" y1="11" x2="17" y2="11.01"></line>
              <line x1="17" y1="15" x2="17" y2="15.01"></line>
            </svg>
            <p>Shared homes</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
            <p>Luxe</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ship" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"></path>
              <path d="M4 18l-1 -5h18l-2 4"></path>
              <path d="M5 13v-6h8l4 6"></path>
              <path d="M7 7v-4h-1"></path>
            </svg>
            <p>Lake</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-window" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z"></path>
              <line x1="5" y1="13" x2="19" y2="13"></line>
              <line x1="12" y1="3" x2="12" y2="21"></line>
            </svg>
            <p>Domes</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
              <line x1="5" y1="21" x2="5" y2="10.85"></line>
              <line x1="19" y1="21" x2="19" y2="10.85"></line>
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
            </svg>
            <p>Class perticular</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sailboat" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1"></path>
              <path d="M4 18l-1 -3h18l-1 3"></path>
              <path d="M11 12h7l-7 -9v9"></path>
              <line x1="8" y1="7" x2="6" y2="12"></line>
            </svg>
            <p>House boat</p>
          </div>
          <div className="features">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-cottage" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11"></path>
              <circle cx="12" cy="9" r="2"></circle>
              <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5"></path>
            </svg>
            <p>Historical homes</p>
          </div>

        </nav>


      </div>
      <div className="showMap">
        <span>show map</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map" width="17" height="17"
          viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7"></polyline>
          <line x1="9" y1="4" x2="9" y2="17"></line>
          <line x1="15" y1="7" x2="15" y2="20"></line>
        </svg>
      </div>

      {/* <!-- cards started --> */}
      <div className="cardContainer">

        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-3">

          <div className="class123 ">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/6e6e20e5-11d6-4917-ba87-74c48bd3d38f.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/57d7dd9c-92d3-4041-81da-b8d17bbdfed6.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/60318684-d6a1-4d63-b471-95729f7a2e18.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/dd70ada0-467c-44bf-b9ae-23ae3b402b2c.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/19642a01-9946-4480-a2f7-373f3a32d24c.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/dd70ada0-467c-44bf-b9ae-23ae3b402b2c.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/197cde9c-273e-4aac-92ec-a8dabc20cd8e.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Jibhi, India</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.9
              </span>
              <p className="greyColor">1493 kilometers away</p>
              <p className="greyColor">18-25 Nov</p>
              <span className="bold">₹6846</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/4490013e-b620-4050-8ea5-09e5f7c177df.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Dubai, UAE</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                5
              </span>
              <p className="greyColor">1200 kilometers away</p>
              <p className="greyColor">20-25 Nov</p>
              <span className="bold">₹1,15,000</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/5f675304-cda2-4aed-b2fe-b0bd91385c56?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/61435266-3bac-4281-b4df-aa5752506359?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/6ca16cea-b2f1-4060-9ecb-9179c2672ea5?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/3d27e780-55ed-4f27-b743-c4837036c19d?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/6b0b4b50-1e41-46ad-a537-ce7c229255b7?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/0bfe0d99-a3c7-4c1a-901a-0bcc9afe49d7?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/monet/Luxury-579595280170983770/original/6b6c7577-71b4-4491-a9c7-66b8ac14b8ee?im_w=720"
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Jibhi, India</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                new
              </span>
              <p className="greyColor">1859 kilometers away</p>
              <p className="greyColor">22-27 Nov</p>
              <span className="bold">₹9857</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/235d56fe-4241-4267-a24c-c70fdb4f8711.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">TH, Thailand</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.9
              </span>
              <p className="greyColor">2190 kilometers away</p>
              <p className="greyColor">20-28 Nov</p>
              <span className="bold">₹54,811</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/5f30ecef-1304-48ae-a891-6dd0a390917c.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Surat Thani, Thailand</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.9
              </span>
              <p className="greyColor">1493 kilometers away</p>
              <p className="greyColor">19-25 Nov</p>
              <span className="bold">₹25,578</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/4aa46a6f-d34a-488d-951c-1ebf07344d10.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Ko Samui, Thailand</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.5
              </span>
              <p className="greyColor">782 kilometers away</p>
              <p className="greyColor">18-25 Nov</p>
              <span className="bold">₹6846</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/1b44bde8-8912-4d5f-838e-5810f7f30637.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Tambon, Thailand</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.9
              </span>
              <p className="greyColor">1493 kilometers away</p>
              <p className="greyColor">18-25 Nov</p>
              <span className="bold">₹6846</span>
              <span className=""> night</span>
            </div>
          </div>

          <div className="">
            <div id="carouselExampleIndicators" className="carousel" data-bs-ride="">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active " aria-current="false" aria-label="Slide 1"></button>
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
              </div>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src="https://a0.muscache.com/im/pictures/1b44bde8-8912-4d5f-838e-5810f7f30637.jpg?im_w=720"
                    className="d-block w-100" alt="pic" />
                </div>
                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
                </div>

                <div className="carousel-item">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="white"
                    fill="rgba(0,0,0,0.5)" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                  </svg>
                  <img src=""
                    className="d-block w-100" alt="pic" />
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

            <div className="cardFooter">
              <span className="location bold">Goa, India</span>
              <span className="rating">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="14"
                  height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="black"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                  </path>
                </svg>
                4.8
              </span>
              <p className="greyColor">501 kilometers away</p>
              <p className="greyColor">20-25 Nov</p>
              <span className="bold">₹17,500</span>
              <span className=""> night</span>
            </div>
          </div>

        </div>

      </div>

      {/* <!-- cards ended --> */}

      {/* footer start */}
      <nav className="sticky-bottom mainFooterContainer">
        <div className="footerContainer">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="26" height="26" viewBox="0 0 24 24" stroke-width="3" stroke="tomato" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <p>Explore</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="grey" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            </svg>
            <p>Wishlist</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="grey" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
            </svg>
            <p>Log in</p>
          </div>
        </div>
      </nav>
      {/* footer ended */}

    </>
  );
}

export default App;
