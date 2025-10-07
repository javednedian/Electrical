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
						{/* <h4> Welcome to dreamit </h4> */}
							<h1> Trusted Home Repair &</h1>
						<h1>Maintenance Services in [Your City]</h1>
						<p>Expert plumbers, electricians, and handymen available 24/7 for fast, reliable home repairs.</p>
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
{/* <div className="feature-area">
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
</div> */}
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
							<h2>20+ Years of Expert  </h2>
							<h2>Home Repair <span>& Electrical Services</span></h2>
							<div className="em_bar_bg text-left"></div>
							<p> For over two decades, we have been providing reliable plumbing, electrical, and handyman services to homeowners and businesses in [City/Region]. Our certified technicians are trained to handle everything from small home repairs to large-scale installations with professionalism and care.</p>
							<p>We pride ourselves on delivering top-quality workmanship, fast response times, and fair pricing. Whether it’s an urgent repair, preventive maintenance, or a complete installation, our team ensures your home and office remain safe, comfortable, and fully functional.</p>
						</div>
					</div>
					{/* <div className="col-lg-6 col-md-6 col-sm-12">
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
					</div> */}
					<div className="col-lg-12 col-sm-12">
						<div className="about-content-text pt-3">
							<p><i className="far fa-check-circle"></i> <span>The Best Quality Services: Guaranteed satisfaction on every job.</span></p>
						</div>
						<div className="about-content-text">
							<p><i className="far fa-check-circle"></i> <span>Warranty & Maintenance: All services backed by warranty and ongoing support.</span></p>
						</div>
						<div className="about-content-text">
							<p><i className="far fa-check-circle"></i> <span>Skilled & Certified Experts: Licensed electricians, plumbers, and handymen.</span></p>
						</div>
						<div className="about-content-text">
							<p><i className="far fa-check-circle"></i> <span>Transparent Pricing: No hidden costs, clear upfront quotes.</span></p>
						</div>
						<div className="dreamit-button">
							<Link href="/about-us">About More</Link>
						</div>
					</div>	
				</div>
			</div>
			<div className="col-lg-6 col-sm-12">
				<div className="dreamit-about-thumb">
					<img src="/assets/images/Electric-6.jpg" alt=""/>
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
					<h2>Our Professional Home Repair  </h2>
					<h2>& <span>Electrical Services</span></h2>
					<div  className="text-xl  text-gray-400 mb-4">We provide a wide range of residential, commercial, and industrial repair services to keep your home and business running smoothly. From emergency electrical repairs to complete plumbing and handyman solutions, our certified experts are available 24/7 to deliver reliable, safe, and affordable services in [City/Region].</div>

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
								<h2> Residential Electrical Services</h2>
								<p>Expert electricians for home electrical repairs, installations, and maintenance. From faulty wiring to lighting upgrades, we ensure your home is safe and efficient.</p>
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
								<h2>Emergency Electrician (24/7 Service)</h2>
								<p>Fast-response 24/7 emergency electricians for urgent power failures, tripped breakers, and electrical faults, available anytime, day or night.</p>
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
								<h2>Electrical Repairs & Maintenance</h2>
								<p> Reliable electrical repair services including wiring issues, socket and switch repair, circuit breaker servicing, and scheduled preventive maintenance.</p>
							</div>
						</div>
					</div>
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
								<h2>Electrical Installations</h2>
								<p>Professional installation of lighting systems (indoor/outdoor), LED upgrades, switchboards, ceiling fans, and home appliances, done right the first time.</p>
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
								<h2>Wiring & Rewiring Services</h2>
								<p>Safe new home/office wiring, old wiring replacement, and rewiring services, fully compliant with local safety regulations and industry standards.</p>
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
								<h2>Commercial & Industrial Electrical Services</h2>
								<p> Comprehensive solutions for offices, warehouses, and factories, including generator installation, industrial-grade wiring, and electrical maintenance contracts.</p>
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
					<img src="/assets/images/electric-8.jpg" alt=""/>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 left-why-choose-us">
				<div className="dreamit-section-title text-left">
					<h5>WHY CHOOSE US</h5>
					<h2>OWhy Choose Us for Your Home & Electrical Services</h2>
					{/* <h2>Most Mome <span>Services</span></h2> */}
					<div className="em_bar_bg text-left"></div>
					<p>Choosing the right repair service can be difficult, here’s why homeowners and businesses trust us for plumbing, electrical, and handyman solutions in [City/Region].</p>
					<p><i className="far fa-check-circle"></i> <span>24/7 Emergency Support: Fast response for urgent plumbing & electrical issues anytime.</span></p>
					<p><i className="far fa-check-circle"></i> <span>20+ Years of Experience: Skilled technicians with proven expertise in residential, commercial, and industrial projects.</span></p>
					<p><i className="far fa-check-circle"></i> <span>Licensed & Certified Experts: All work done by qualified electricians, plumbers, and handymen.</span></p>
					<p><i className="far fa-check-circle"></i> <span>Warranty on All Services: Guaranteed quality and long-lasting repairs for your peace of mind.</span></p>
					<p><i className="far fa-check-circle"></i> <span>Upfront & Transparent Pricing; No hidden fees, clear quotes before work begins.</span></p>
					<p><i className="far fa-check-circle"></i> <span>Trusted by Hundreds of Clients: Strong reputation for reliability, safety, and customer satisfaction.</span></p>
					<p>When it comes to reliable home repair and maintenance, we deliver professional service you can count on. Contact us today for a free quote</p>
					
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
					<h2>What Our Customers Say</h2>
					<p>We take pride in delivering reliable plumbing, electrical, and handyman services that our clients can count on. Here’s what some of our happy customers have to say:</p>
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
							<div className="testimonial-text">We had a major power outage late at night, and their emergency electrician arrived within 30 minutes. Professional, quick, and very affordable. Highly recommended!</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi1.jpg" alt=""/>
						</div>
						<div className="testi-titile">
							<h2>Ayesha K. – Dubai</h2>
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
							<div className="testimonial-text">Called them for a plumbing leak at my office. The technician was polite, explained everything clearly, and fixed it the same day. Great service.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi2.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>Imran H. – Dubai</h2>
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
							<div className="testimonial-text">We’ve used their team for both electrical maintenance and home repairs. Always on time, trustworthy, and their pricing is transparent. Will hire again.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi3.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>Sana R. – Dubai</h2>
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
							<div className="testimonial-text">Excellent service for wiring and LED lighting installation. The electrician was skilled, and the work was done to DEWA standards. Very satisfied.</div>
						</div>
						<div className="testimonial-thumb">
							<img src="/assets/images/resource/testi3.jpg" alt=""/>
						</div>
						<div className="testi-titile text-center">
							<h2>David P. – Dubai Marina</h2>
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
{/* <div className="blog_area">
	<div className="container">
		<div className="row">
			<div className="col-lg-12 col-sm-12">
				<div className="dreamit-section-title text-center pb-30">
					<h5>OUR BLOG</h5>
					<h2>Home Repair Tips & </h2>
					<h2>Expert <span> Guides</span></h2>
					<div className="text-xl  text-gray-400 mb-4">Stay updated with the latest plumbing, electrical, and handyman tips from our experts. Our blog helps homeowners and businesses keep their properties safe, efficient, and well-maintained.</div>
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
								<h4><Link href="blog-details.html">Top 5 Common Electrical Problems at Home (and How to Fix Them)</Link></h4>
							</div>
							<div className="blog_description">
								<p>Discover the most frequent household electrical issues like tripped breakers, faulty sockets, and wiring problems and learn simple fixes before calling a professional.</p>
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
								<h4><Link href="blog-details.html">Why Preventive Electrical Maintenance Saves You Time & Money</Link></h4>	
							</div>
							<div className="blog_description">
								<p>Regular inspections and maintenance help avoid unexpected breakdowns, reduce repair costs, and keep your home or office safe year-round.</p>
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
								<h4><Link href="blog-details.html">Emergency Plumbing Tips: What to Do Before the Technician Arrives</Link></h4>
							</div>
							<div className="blog_description">
								<p>Quick actions during a plumbing emergency can minimize damage. Learn the essential steps to take while waiting for professional help.</p>
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
								<h4><Link href="blog-details.html">LED Lighting Upgrades: Benefits for Homes & Offices</Link></h4>
							</div>
							<div className="blog_description">
								<p>Switching to LED lighting reduces energy costs, improves brightness, and creates a modern look for both residential and commercial spaces.</p>
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
								<h4><Link href="blog-details.html">Wiring & Rewiring Explained: Safety Tips Every Homeowner Should Know</Link></h4>
							</div>
							<div className="blog_description">
								<p>Old or faulty wiring can be dangerous. Understand when rewiring is needed and how professional services ensure compliance with safety standards.</p>
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
								<h4><Link href="blog-details.html">Commercial Generator Maintenance: Avoid Costly Power Failures</Link></h4>
							</div>
							<div className="blog_description">
								<p>Keep your business running smoothly with regular generator servicing to prevent unexpected outages and costly downtime.</p>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</div> */}
{/* <!--==================================================-->
<!-- End dreamit Blog Area -->
<!--==================================================--> */}

    
    </>
  );
}
