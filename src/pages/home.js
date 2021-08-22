import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div class="main-body-wrapper">

                <section class="main-navigation" id="header">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg ">
                            <div class="row w-100 pd-aligned-center">

                                <div class="col-lg-3 text-left logo-div-header">
                                    <a class="navbar-brand" href="#">E<span>at</span>me</a>
                                </div>

                                <div class="col-lg-9 text-right menu-div">

                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="true" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon CrossButton"></span>
                                    </button>


                                    <div class="main-menu-wrap navbar-collapse collapse" id="navbarSupportedContent">

                                        <ul class="navbar-nav">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="#home">Home </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#about">About Us</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#menu">Our Menu</a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="#testimonials">Testimonials</a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="#contact">Contact Us</a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </nav>
                    </div>
                </section>


                <section class="main-banner" id="home">
                    <div class="owl-carousel owl-theme" id="main-banner">

                        <div class="item" style="background-image: url('assets/images/banenr-1.jpg');">
                            <div class="dark-overlay-banner"></div>
                            <div class="container">
                                <div class="row">
                                    <div class="main-banner-content ">
                                        <h2>Lorem Ipsum Doler </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quae nam
                                            cupiditate
                                            molestias? Sint modi est.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="item" style="background-image: url('assets/images/banenr-2.jpg');">
                            <div class="dark-overlay-banner"></div>
                            <div class="container">
                                <div class="row">
                                    <div class="main-banner-content ">
                                        <h2>Lorem Ipsum Doler </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quae nam
                                            cupiditate
                                            molestias? Sint modi est.
                                        </p>
                                        <a href="#">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>


                <section class="dp-products-slider">
                    <img src="assets/images/food-plate.jpg" class="about-decoration-image" />
                    <div class="container">
                        <div class="owl-carousel owl-theme" id="product-banner" data-aos="fade-up" data-aos-delay="3500"
                            data-aos-duration="800">

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-1.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-2.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-3.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-4.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-5.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-6.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-prod" style="background-image: url(assets/images/food-slider-7.jpg);">
                                    <div class="dark-prod-card"></div>
                                    <h4 class="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="intro-sec pd-pad-set" id="about">
                    <div class="container">
                        <div class="row text-center">
                            <h2 class="pd-sec-heading" data-aos="fade-up" data-aos-duration="800">Disc<span>o</span>ver
                                <span>O</span>ur Sto<span>r</span>y
                            </h2>
                            <p class="desc-para" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                totam
                                nisi voluptas ut explicabo quis, odio error vel illum dolorum facilis tenetur. Nostrum provident
                                aperiam voluptatem. odio error vel illum dolorum facilis tenetur. Nostrum provident aperiam
                                voluptatem!
                            </p>
                            <img src="assets/images/about-image.png" class="about-main-image" data-aos="fade-up"
                                data-aos-delay="800" data-aos-duration="1500" />
                        </div>
                    </div>
                </section>


                <section class="our-menu-sec pd-pad-set" id="menu">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2 class="pd-sec-heading" data-aos="fade-up" data-aos-duration="800">O<span>u</span>r
                                    M<span>e</span>nu</h2>
                                <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                    totam nisi voluptas ut explicabo quis, odio error vel illum dolorum facilis tenetur. Nostrum
                                    provident aperiam voluptatem. odio error vel illum dolorum facilis tenetur. Nostrum
                                    provident
                                    aperiam voluptatem!
                                </p>
                                <ul data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                                    <li>ipsum dolor sit amet consectetur, adipisicing elit</li>
                                    <li>sit amet consectetur</li>
                                    <li>Possimus quae nam cupiditate</li>
                                    <li>molestias? Sint modi est</li>
                                </ul>
                                <img src="assets/images/plate-1.png" class="w-100 menu-left-image" data-aos="fade-up"
                                    data-aos-delay="600" data-aos-duration="800" />
                            </div>
                            <div class="col-lg-6 menu-slider">
                                <div class="owl-carousel owl-theme" id="menu-slider">
                                    <div class="item">
                                        <img src="assets/images/menu-1.jpg" class="w-100" />
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/menu-2.jpg" class="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="testimonials-sec pd-pad-set" id="testimonials">
                    <img src="assets/images/cutting-board.png" class="testimonial-decorate-image" />
                    <img src="assets/images/chilly.jpg" class="testimonial-decorate-image2" />
                    <div class="container">
                        <div class="row text-center">
                            <h2 class="pd-sec-heading" data-aos="fade-up" data-aos-duration="800">
                                T<span>e</span>stim<span>o</span>nials</h2>
                            <p class="desc-para" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                totam nisi voluptas ut explicabo quis.
                            </p>

                            <div class="owl-carousel owl-theme" id="testimonials-slider" data-aos="fade-up" data-aos-delay="600"
                                data-aos-duration="1500">
                                <div class="item">
                                    <img src="assets/images/testi-1.jpg" class="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div class="item">
                                    <img src="assets/images/testi-2.jpg" class="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div class="item">
                                    <img src="assets/images/testi-3.jpg" class="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div class="item">
                                    <img src="assets/images/testi-4.jpg" class="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>








                <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                    integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>


                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                    crossorigin="anonymous"></script>



                <script src="assets/js/main.js"></script>

                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script>
                    {/* AOS.init(); */}
                </script>



                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                    crossorigin="anonymous"></script>

                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
                    integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
                    crossorigin="anonymous"></script>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha512-Ah5hWYPzDsVHf9i2EejFBFrG2ZAPmpu4ZJtW4MfSgpZacn+M9QHDt+Hd/wL1tEkk1UgbzqepJr6KnhZjFKB+0A=="
                    crossorigin="anonymous" referrerpolicy="no-referrer"></script>

            </div>
        )
    }
}

export default Home;