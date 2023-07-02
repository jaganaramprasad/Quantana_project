// import Head from 'next/head';
// import Image from 'next/image';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import styles from '../styles/Home.module.css';
import "../App.css";

export default function Home() {
  useEffect(() => {
    // Add your custom JavaScript code here if needed
  }, []);

  return (
    <div >
      {/* <Head>
        <title>How to create Testimonial Carousel using Bootstrap5</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet" />
      </Head> */}

      <section>
        <div className="container">
          <h1 className="section-header">
            Client Review 
          </h1>
          <div className="testimonials">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            <img src="https://wallpapers.com/images/hd/cool-profile-picture-awled9dwo4qq2yv2.jpg" alt="" width={200} height={200} />
                          </div>
                          {/* <div className="bio">
                            <h2>Dave Wood</h2>
                            <h4>Web Developer</h4>
                          </div> */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content">
                          <h2>Dave Wood</h2>
                          <h4>Web Developer</h4>
                          <p>
                            <span>
                              <i className="fa fa-quote-left" />
                            </span>
                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!
                          </p>
                          <p className="socials">
                            <i className="fa fa-twitter" />
                            <i className="fa fa-behance" />
                            <i className="fa fa-pinterest" />
                            <i className="fa fa-dribbble" />
                            <i className="fa fa-vimeo" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            {/* <Image src="/img/2.jpg" alt="" width={200} height={200} />  */}
                          </div>
                          <div className="bio">
                            <h2>Martin Guptill</h2>
                            <h4>UI/UX Designer</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left" />
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!
                          </p>
                          <p className="socials">
                            <i className="fa fa-twitter" />
                            <i className="fa fa-behance" />
                            <i className="fa fa-pinterest" />
                            <i className="fa fa-dribbble" />
                            <i className="fa fa-vimeo" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="single-item">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile">
                          <div className="img-area">
                            {/* <Image src="/img/3.jpg" alt="" width={200} height={200} /> */}
                          </div>
                          <div className="bio">
                            <h2>Stephen Jones</h2>
                            <h4>Graphic Designer</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="content">
                          <p>
                            <span>
                              <i className="fa fa-quote-left" />
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!
                          </p>
                          <p className="socials">
                            <i className="fa fa-twitter" />
                            <i className="fa fa-behance" />
                            <i className="fa fa-pinterest" />
                            <i className="fa fa-dribbble" />
                            <i className="fa fa-vimeo" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
