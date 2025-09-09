import Image from "next/image";
import Link from "next/link";


export default function Blogs() {
  return (
    <>

<div className="breatcumb-area d-flex align-items-center">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<div className="breatcumb-content text-center">
					<div className="breatcumb-title">
						<h2>Blog Grid</h2>
					</div>
					<div className="breatcumb-content-text">
						<ul>
							<li><Link href="/blog-details">home</Link> <i className="fas fa-angle-right"></i> <span>Blog Grid</span></li>
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
<!-- Start dreamit Blog Area -->
<!--==================================================--> */}
<div className="blog_area style-two">
	<div className="container">
		<div className="row">
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">	
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog1.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">Plumbing Tips For Winter and summer </Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog2.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">We provide Home Repairs & Maintenance</Link></h4>	
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog3.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">We provide Home Repairs & Maintenance</Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog4.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">Benefits of Home & office Inception?</Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog5.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">A Guide for Replacement of Lighting</Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog6.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">Got a Leaking? Hire an experienced Plumber</Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog7.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">When have a problem with Cracked Pipes</Link></h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="single_blog">
					<div className="single_blog_thumb">
						<Link href="/blog-details"><img src="assets/images/resource/blog2.jpg" alt="" /></Link>
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
							<h4><Link href="/blog-details">The reason behind Power Outlets are Sparking</Link></h4>
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