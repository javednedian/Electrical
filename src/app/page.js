import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    
    

<div className="slider_list owl-carousel">
	<div className="slider-area slider1 d-flex align-items-center">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="slider-content">
						<h4> Welcome to dreamit </h4>
						<h1> Best Home Services</h1>
						<h1>Repairer Offers </h1>
						<p>Have a plumbing issue? Call 24 hours emergency services all time.</p>
						<div className="hero-text">
							<i className="fas fa-phone"></i> <span> 088 01318 254 </span>
						</div>
						<div className="slider-button">
							<Link href="#">Get Started</Link>
						</div>
						<div className="slider-button1">
							<Link href="/contact-us">Contact Us</Link>
						</div>
					</div>
				 </div>
			</div>
		</div>
	</div>
	<div className="slider-area slider2 d-flex align-items-center">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-6 col-sm-12">
					<div className="slider-content">
						<h4> Welcome to dreamit </h4>
						<h1> Best Home Services</h1>
						<h1>Repairer Offers </h1>
						<p>Have a plumbing issue? Call 24 hours emergency services all time.</p>
						<div className="hero-text">
							<i className="fas fa-phone"></i> <span> 088 01318 254 </span>
						</div>
						<div className="slider-button">
							<Link href="#">Get Started</Link>
						</div>
						<div className="slider-button1">
							<Link href="/contact-us">Contact Us</Link>
						</div>
					</div>
				 </div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!--End dreamit slider Area  -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit feature Area -->
<!--==================================================--> */}
<div className="feature-area">
	<div className="container">
		<div className="row backgraound-fc">

			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-feature-single-box">
					<div className="feature-box-icon">
						<span><i className="flaticon-car-repair"></i></span>
					</div>
					<div className="feature-box-title">
						<h2>Electrician</h2>
						<p>Lorem ipsum dolor thises amet, consectetur is adipiscing elit</p>
					</div>
					<div className="feature-icon-bottom text-right">
						<i className="flaticon-car-repair"></i>
					</div>
				</div>
			</div>
			
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-feature-single-box">
					<div className="feature-box-icon">
						<span><i className="flaticon-driver"></i></span>
					</div>
					<div className="feature-box-title">
						<h2>Plumber</h2>
						<p>Lorem ipsum dolor thises amet, consectetur is adipiscing elit</p>
					</div>
					<div className="feature-icon-bottom text-right">
						<i className="flaticon-driver"></i>
					</div>
				</div>
			</div>
			
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-feature-single-box">
					<div className="feature-box-icon">
						<span><i className="flaticon-toolbox-2"></i></span>
					</div>
					<div className="feature-box-title">
						<h2>Mechanic</h2>
						<p>Lorem ipsum dolor thises amet, consectetur is adipiscing elit</p>
					</div>
					<div className="feature-icon-bottom text-right">
						<i className="flaticon-toolbox-2"></i>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit feature Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit about Area -->
<!--==================================================--> */}
<div className="about-area pt-65 pb-95">
	<div className="container">
		<div className="row">		
			<div className="col-lg-6">
				<div className="row">
					<div className="col-lg-12">
						<div className="dreamit-section-title text-left">
							<h5>About</h5>
							<h2>20 Years Experience In The</h2>
							<h2>Handyman <span>& Plumber</span></h2>
							<div className="em_bar_bg text-left"></div>
							<p>Proin gravida nibh vel velit auctor aliquet. sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum, sagittis sem nibh elit veniam, quis nostrud exercitation</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-electrician-6"></i>
							<div className="elementor-widget-title">
								<h2>The Best Quality Services</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-electrician-4"></i>
							<div className="elementor-widget-title">
								<h2>Warranty & Maintenance</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-12 col-sm-12">
						<div className="about-content-text pt-3">
							<p><i className="far fa-check-circle"></i> <span>Praesent quis odio sit amet nisl luctus venenatis.</span></p>
						</div>
						<div className="about-content-text">
							<p><i className="far fa-check-circle"></i> <span>Regular solution give for home problems by handyman.</span></p>
						</div>
						<div className="about-content-text">
							<p><i className="far fa-check-circle"></i> <span>Office Desk and Floor Cleaning Services.</span></p>
						</div>
						<div className="dreamit-button">
							<Link href="/about-us">About More</Link>
						</div>
					</div>	
				</div>
			</div>
			<div className="col-lg-6 col-sm-12">
				<div className="dreamit-about-thumb">
					<img src="/assets/images/about/about.png" alt=""/>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit about Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit service Area -->
<!--==================================================--> */}
<div className="service-area pt-50">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-sm-12">
				<div className="dreamit-section-title white text-center pb-30">
					<h5>OUR SERVICES</h5>
					<h2>We Provide One Of The Best</h2>
					<h2>MEP <span>Services</span></h2>
					<div className="em_bar_bg text-left"></div>
				</div>
			</div>
		</div>
		<div className="row">
		
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-service-box">
					<div className="dreamit-service-box-inner">
						<div className="dreamit-service-content">
							<div className="dreamit-service-icon">
								<i className="flaticon-car-service"></i>
							</div>
							<div className="dreamit-service-title">
								<h2>Plumbing Services</h2>
								<p>Lorem Ipsum simply dummy text of the printing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-service-box1">
					<div className="dreamit-service-box-inner1">
						<div className="dreamit-service-content">
							<div className="dreamit-service-icon1">
								<i className="flaticon-electrical-circuit"></i>
							</div>
							<div className="dreamit-service-title1">
								<h2>Electrical Services</h2>
								<p>Lorem Ipsum simply dummy text of the printing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-service-box">
					<div className="dreamit-service-box-inner">
						<div className="dreamit-service-content">
							<div className="dreamit-service-icon">
								<i className="flaticon-electrician-4"></i>
							</div>
							<div className="dreamit-service-title">
								<h2>Mechanical Services</h2>
								<p>Lorem Ipsum simply dummy text of the printing</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit service Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit process Area -->
<!--==================================================--> */}
<div className="why-choose-us-area pb-95">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="why-choose-us-thumb">
					<img src="/assets/images/resource/wch.jpg" alt=""/>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 left-why-choose-us">
				<div className="dreamit-section-title text-left">
					<h5>WHY CHOOSE US</h5>
					<h2>Offer Reliable Services For</h2>
					<h2>Most Mome <span>Services</span></h2>
					<div className="em_bar_bg text-left"></div>
					<p>Proin gravida nibh vel velit auctor aliquet. sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum, sagittis sem nibh elit veniam, quis nostrud exercitation</p>
					
					<p>Proin gravida nibh vel velit auctor aliquet. sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum, sagittis sem nibh elit veniam, quis nostrud exercitation</p>
					
					<div className="dreamit-button">
						<Link href="#">Get Started</Link>
					</div>
					
				</div>
				 
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit process Area -->
<!--==================================================-->


<!--==================================================-->
<!--Start dreamit testimonial Area -->
<!--==================================================--> */}
<div className="testimonial-area pt-90 pb-90">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-sm-12">
				<div className="dreamit-section-title pb-40 text-center">
					<h5>OUR CLIENTS TESTIMONIALS</h5>
					<h2>What People Say</h2>
					<h2>For Your Happy Client</h2>
					<div className="em_bar_bg text-left"></div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="testimonial_list owl-carousel">
				<div className="col-lg-12 col-sm-12">
					<div className="dreamit-single-testimonial-box">
						<div className="testimonial-content">
							<div className="testi-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="testimonial-text">Lorem ipsum dolor sit amet saresw consectetur adipis cing elit sed do eiusmod tempor incidi dunt ut labore etolore magna aliqua ipsum suspen disse ultrices ida commodo.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi1.jpg" alt=""/>
						</div>
						<div className="testi-titile">
							<h2>Anowar Hossain </h2>
							<span>Repair Service </span>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="dreamit-single-testimonial-box">
						<div className="testimonial-content">
							<div className="testi-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="testimonial-text">Lorem ipsum dolor sit amet saresw consectetur adipis cing elit sed do eiusmod tempor incidi dunt ut labore etolore magna aliqua ipsum suspen disse ultrices ida commodo.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi2.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>Mehedi Hassan </h2>
							<span>Electrical</span>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="dreamit-single-testimonial-box">
						<div className="testimonial-content">
							<div className="testi-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="testimonial-text">Lorem ipsum dolor sit amet saresw consectetur adipis cing elit sed do eiusmod tempor incidi dunt ut labore etolore magna aliqua ipsum suspen disse ultrices ida commodo.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi3.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>Hossen Babu Orfe</h2>
							<span>Cleaning</span>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="dreamit-single-testimonial-box">
						<div className="testimonial-content">
							<div className="testi-icon">
								<i className="fas fa-quote-left"></i>
							</div>
							<div className="testimonial-text">Lorem ipsum dolor sit amet saresw consectetur adipis cing elit sed do eiusmod tempor incidi dunt ut labore etolore magna aliqua ipsum suspen disse ultrices ida commodo.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi3.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>Al-Amin Sorkar</h2>
							<span>Cleaning</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit testimonial Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit Blog Area -->
<!--==================================================--> */}
<div className="blog_area">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-sm-12">
				<div className="dreamit-section-title text-center pb-30">
					<h5>OUR BLOG</h5>
					<h2>Our Latest Newspaper &</h2>
					<h2>Handyman <span>Articles</span></h2>
					<div className="em_bar_bg text-left"></div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="blog_list owl-carousel">
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">	
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog1.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Plumbing</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman</Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">Plumbing Tips For Winter and summer </Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog2.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Repair</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman</Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">We provide Home Repairs & Maintenance</Link></h4>	
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog3.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Electrician</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">We provide Home Repairs & Maintenance</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog4.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Repair</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">Benefits of Home & office Inception?</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog5.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Handyman</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">A Guide for Replacement of Lighting</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog6.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Plumbing</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">Got a Leaking? Hire an experienced Plumber</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog7.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Handyman</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">Dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">When have a problem with Cracked Pipes</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-sm-12">
					<div className="single_blog">
						<div className="single_blog_thumb">
							<Link href="blog-details.html"><img src="/assets/images/resource/blog2.jpg" alt="" /></Link>
							<div className="dreamit-meta-blog-top">
								<ul>
									<li><Link href="#">Electrician</Link></li>
								</ul>
							</div>
						</div>
						<div className="single_blog_content">
							<div className="dreamit_blog_meta">
								<Link href="#">Dit-handyman <span></span></Link>
							</div>
							<div className="post-categories">
								<Link href="#">July 10,2024</Link>
							</div>
							<div className="blog_page_title">
								<h4><Link href="blog-details.html">The reason behind Power Outlets are Sparking</Link></h4>
							</div>
							<div className="blog_description">
								<p>Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit Blog Area -->
<!--==================================================--> */}

    
    </>
  );
}
