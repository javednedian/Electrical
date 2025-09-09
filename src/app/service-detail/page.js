import Image from "next/image";
import Link from "next/link";


export default function ServiceDetail() {
  return (
    <>
<div className="breatcumb-area d-flex align-items-center">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<div className="breatcumb-content text-center">
					<div className="breatcumb-title">
						<h2>Service Details</h2>
					</div>
					<div className="breatcumb-content-text">
						<ul>
							<li><Link href="/">home</Link> <i className="fas fa-angle-right"></i> <span>Service Details</span></li>
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
<!-- Start dreamit service Area -->
<!--==================================================--> */}
<div className="widget-service-area pt-100 pb-60">
	<div className="container">
		<div className="row">
			
			<div className="col-lg-12 col-md-6 col-sm-12">
				<div className="widget-service-thumb-detials">
				
					<img src="assets/images/slider/slider7.png" alt="" className="w-100"/>
					
					<div className="elementor-widget-title1 mt-5">
						<h2>Description For Electrician Services</h2>
						<p>Dream-IT It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy well done for dream it .</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-single-box3">
							<div className="why-choose-us-icon3">
								<i className="flaticon-electrician-3"></i>
							</div>
							<div className="why-choose-us-content3">
								<div className="why-choose-us-title3">
									<h2>Sub Service 1</h2>
									<p>Lorem ipsum dolor sit dream-it, consectetur adipiscing elit,</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-single-box3">
							<div className="why-choose-us-icon3">
								<i className="flaticon-window-cleaner"></i>
							</div>
							<div className="why-choose-us-content3">
								<div className="why-choose-us-title3">
									<h2>Sub Service 2</h2>
									<p>Lorem ipsum dolor sit dream-it, consectetur adipiscing elit,</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-single-box3">
							<div className="why-choose-us-icon3">
								<i className="flaticon-window-cleaner"></i>
							</div>
							<div className="why-choose-us-content3">
								<div className="why-choose-us-title3">
									<h2>Sub Service 3</h2>
									<p>Lorem ipsum dolor sit dream-it, consectetur adipiscing elit,</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-single-box3">
							<div className="why-choose-us-icon3">
								<i className="flaticon-window-cleaner"></i>
							</div>
							<div className="why-choose-us-content3">
								<div className="why-choose-us-title3">
									<h2>Sub Service 4</h2>
									<p>Lorem ipsum dolor sit dream-it, consectetur adipiscing elit,</p>
								</div>
							</div>
						</div>
					</div>
					
					
				</div>

			</div>
		</div>
	</div>
</div>

   </>
  );
}