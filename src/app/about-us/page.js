import Image from "next/image";
import Link from "next/link";


export default function AboutUs() {
  return (
    <>

<div className="breatcumb-area d-flex align-items-center">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<div className="breatcumb-content text-center">
					<div className="breatcumb-title">
						<h2>About us</h2>
					</div>
					<div className="breatcumb-content-text">
						<ul>
							<li><Link href="/">home</Link> <i className="fas fa-angle-right"></i> <span>About us</span></li>
						</ul>
					</div>	
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End	softech slider Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit about Area -->
<!--==================================================--> */}

<div className="about-area style-two pt-90 pb-50">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="dreamit-about-thumb">
					<img src="/assets/images/Electric-1.jpg" alt="" style={{width:500, height:400}}/>
				</div>
			</div>	
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="row">
					<div className="col-lg-12">
						<div className="dreamit-section-title text-left">
							<h5>About</h5>
							<h2>20+ Years of Expert Home Repair </h2>
							<h2>&<span> Electrical Services </span></h2>
							<div className="em_bar_bg text-left"></div>
							<p> For over two decades, we have been providing reliable plumbing, electrical, and handyman services to homeowners and businesses in [City/Region]. Our certified technicians are trained to handle everything from small home repairs to large-scale installations with professionalism and care.</p>
							<p>We pride ourselves on delivering top-quality workmanship, fast response times, and fair pricing. Whether it’s an urgent repair, preventive maintenance, or a complete installation, our team ensures your home and office remain safe, comfortable, and fully functional.</p>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-window-cleaner"></i>
							<div className="elementor-widget-title">
								<h2>The Best Quality Services</h2>
								<p>Guaranteed satisfaction on every job.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-electrician-4"></i>
							<div className="elementor-widget-title">
								<h2>Warranty & Maintenance</h2>
								<p>All services backed by warranty and ongoing support.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-electrician-7"></i>
							<div className="elementor-widget-title">
								<h2>Skilled & Certified Experts</h2>
								<p>Licensed electricians, plumbers, and handymen.</p>
							</div>
						</div>
						<div className="dreamit-button">
							<Link href="#">About More </Link>
						</div>
					</div>	
					<div className="col-lg-6 col-sm-12">
						<div className="elementor-widget-icon-box">
							<i className="flaticon-electrician-6"></i>
							<div className="elementor-widget-title">
								<h2>Transparent Pricing</h2>
								<p>No hidden costs, clear upfront quotes.</p>
							</div>
						</div>
					</div>
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
<!--==================================================-->  */}

{/* <div className="service-area style-seven">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-single-service-box4">
					<div className="single-service-icon4">
						<i className="flaticon-car-service"></i>
					</div>
					<div className="dreamit-service-content">
						<div className="dreamit-service-title">
							<h2>Plumber Services</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority suffered alteration</p>
						</div>
					</div>	
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-single-service-box4">
					<div className="single-service-icon4">
						<i className="flaticon-electrical-circuit"></i>
					</div>
					<div className="dreamit-service-content">
						<div className="dreamit-service-title">
							<h2>Electrician Service</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority suffered alteration</p>
						</div>
					</div>	
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="dreamit-single-service-box4">
					<div className="single-service-icon4">
						<i className="flaticon-electrician-4"></i>
					</div>
					<div className="dreamit-service-content">
						<div className="dreamit-service-title">
							<h2>Painter Services</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority suffered alteration</p>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</div> */}
{/* <!--==================================================-->
<!-- End dreamit service Area -->
<!--==================================================-->


<!--==================================================-->
<!-- Start dreamit subscribe Area -->
<!--==================================================--> */}

<div className="subscribe-area">
	<div className="container">
		<div className="row subscribe-color">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="subscribe-content">
					<div className="subscribe-title">
						<h2>Get Instant Access To</h2>
						<h4>Money Saving Coupons</h4>
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12">
				<div className="contact-form-box">	
					<form id="contact_form" action="https://html.ditsolution.net/dreamit/handyman/mail.php" method="POST">
						<div className="from-box1">
							<input type="text" placeholder="Enter Your Email*"/>
							<button>  Subscribe</button>
						</div>
					</form>
					<p className="form-message"></p>
				</div>
			</div>
		</div>
	</div>
</div>
{/* <!--==================================================-->
<!-- End dreamit subscribe Area -->
<!--==================================================-->

<!--==================================================-->
<!-- Start dreamit Footer Middle Area -->
<!--==================================================--> */}


   </>
  );
}