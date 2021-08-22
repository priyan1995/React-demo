import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="main-body-wrapper">

                <section className="main-navigation" id="header">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="row w-100 pd-aligned-center">

                                <div className="col-lg-3 text-left logo-div-header">
                                    <a className="navbar-brand" href="#">E<span>at</span>me</a>
                                </div>

                                <div className="col-lg-9 text-right menu-div">

                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="true" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon CrossButton"></span>
                                    </button>


                                    <div className="main-menu-wrap navbar-collapse collapse" id="navbarSupportedContent">

                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#home">Home </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#about">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#menu">Our Menu</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#testimonials">Testimonials</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="#contact">Contact Us</a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </nav>
                    </div>
                </section>


                <section className="main-banner" id="home">
                    <div className="owl-carousel owl-theme" id="main-banner">

                        <div className="item" >
                            <div className="dark-overlay-banner"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="main-banner-content ">
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


                        <div className="item" >
                            <div className="dark-overlay-banner"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="main-banner-content ">
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


                <section className="dp-products-slider">
                    <img src="assets/images/food-plate.jpg" className="about-decoration-image" />
                    <div className="container">
                        <div className="owl-carousel owl-theme" id="product-banner" >

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                            <div className="item">
                                <div className="card-prod" >
                                    <div className="dark-prod-card"></div>
                                    <h4 className="text-white">
                                        Lorem Ipsum
                                    </h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="intro-sec pd-pad-set" id="about">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="pd-sec-heading" >Disc<span>o</span>ver
                                <span>O</span>ur Sto<span>r</span>y
                            </h2>
                            <p className="desc-para" >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                totam
                                nisi voluptas ut explicabo quis, odio error vel illum dolorum facilis tenetur. Nostrum provident
                                aperiam voluptatem. odio error vel illum dolorum facilis tenetur. Nostrum provident aperiam
                                voluptatem!
                            </p>
                            <img src="assets/images/about-image.png" className="about-main-image" />
                        </div>
                    </div>
                </section>


                <section className="our-menu-sec pd-pad-set" id="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="pd-sec-heading" >O<span>u</span>r
                                    M<span>e</span>nu</h2>
                                <p >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                    totam nisi voluptas ut explicabo quis, odio error vel illum dolorum facilis tenetur. Nostrum
                                    provident aperiam voluptatem. odio error vel illum dolorum facilis tenetur. Nostrum
                                    provident
                                    aperiam voluptatem!
                                </p>
                                <ul >
                                    <li>ipsum dolor sit amet consectetur, adipisicing elit</li>
                                    <li>sit amet consectetur</li>
                                    <li>Possimus quae nam cupiditate</li>
                                    <li>molestias? Sint modi est</li>
                                </ul>
                                <img src="assets/images/plate-1.png" className="w-100 menu-left-image" />
                            </div>
                            <div className="col-lg-6 menu-slider">
                                <div className="owl-carousel owl-theme" id="menu-slider">
                                    <div className="item">
                                        <img src="assets/images/menu-1.jpg" className="w-100" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/images/menu-2.jpg" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="testimonials-sec pd-pad-set" id="testimonials">
                    <img src="assets/images/cutting-board.png" className="testimonial-decorate-image" />
                    <img src="assets/images/chilly.jpg" className="testimonial-decorate-image2" />
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="pd-sec-heading" >
                                T<span>e</span>stim<span>o</span>nials</h2>
                            <p className="desc-para" >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure facere, eos dicta,
                                totam nisi voluptas ut explicabo quis.
                            </p>

                            <div className="owl-carousel owl-theme" id="testimonials-slider" >
                                <div className="item">
                                    <img src="assets/images/testi-1.jpg" className="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div className="item">
                                    <img src="assets/images/testi-2.jpg" className="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div className="item">
                                    <img src="assets/images/testi-3.jpg" className="testimonial-image" />
                                    <h5>Name Here</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus eveniet quas
                                        hic
                                        sit dicta veniam debitis laboriosam. Explicabo dolor autem vero. Distinctio dolor dolore
                                        dolorem cupiditate in voluptatibus quas.</p>
                                </div>

                                <div className="item">
                                    <img src="assets/images/testi-4.jpg" className="testimonial-image" />
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



                <section class="g-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2slk!4v1623909438636!5m2!1sen!2slk"
                        height="450"  allowfullscreen="" loading="lazy" class="w-100"></iframe>
                </section>



                <section class="footer-sec" >
                    <div class="bg-dark-overlay"></div>
                    <div class="container">
                        <div class="row">

                            <div class="col-12 text-center">
                                <a class="navbar-brand" href="#">E<span>at</span>me</a>
                                <p class="text-center desc-para ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                                    possimus esse!
                                    Qui natus deleniti reprehenderit quo distinctio deserunt reiciendis error eum magnam
                                    commodi.
                                    Dolore impedit doloribus quibusdam ipsa nulla praesentium.</p>
                            </div>

                        </div>
                    </div>

                    <div class="footer-seperator">
                        <a class="up-arrow" href="#home"><i class="fas fa-chevron-up"></i></a>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 text-center">
                                <div class="footer-social">
                                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 text-center desktop-credit">
                                <p class="footer-credit">&copy; 2021 all rights reserved.</p>
                            </div>

                            <div class="col-lg-4 text-center">
                                <div class="footer-menu">
                                    <a href="#home">Home</a>
                                    <a href="#about">About</a>
                                    <a href="#menu">Menu</a>
                                    <a href="#testimonials">Testimonials</a>
                                    <a href="#contact">Contact</a>
                                </div>
                            </div>

                            <div class="col-lg-12 text-center mobile-credit">
                                <p class="footer-credit">&copy; 2021 all rights reserved.</p>
                            </div>

                        </div>
                    </div>
                </section>




            </div>
        )
    }
}

export default Home;