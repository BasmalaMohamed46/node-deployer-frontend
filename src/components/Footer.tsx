import '../styles/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id="footer" className="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link to="index.html" className="logo d-flex align-items-center nav-link">
              <span className="sitename">RenderClone</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong><span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="#" className='nav-link'>Home</Link></li>
              <li><Link to="#" className='nav-link'>About us</Link></li>
              <li><Link to="#" className='nav-link'>Services</Link></li>
              <li><Link to="#" className='nav-link'>Terms of service</Link></li>
              <li><Link to="#" className='nav-link'>Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="#" className='nav-link'>Web Design</Link></li>
              <li><Link to="#" className='nav-link'>Web Development</Link></li>
              <li><Link to="#" className='nav-link'>Product Management</Link></li>
              <li><Link to="#" className='nav-link'>Marketing</Link></li>
              <li><Link to="#" className='nav-link'>Graphic Design</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li><Link to="#" className='nav-link'>Molestiae accusamus iure</Link></li>
              <li><Link to="#" className='nav-link'>Excepturi dignissimos</Link></li>
              <li><Link to="#" className='nav-link'>Suscipit distinctio</Link></li>
              <li><Link to="#" className='nav-link'>Dilecta</Link></li>
              <li><Link to="#" className='nav-link'>Sit quas consectetur</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li><Link to="#" className='nav-link'>Ipsam</Link></li>
              <li><Link to="#" className='nav-link'>Laudantium dolorum</Link></li>
              <li><Link to="#" className='nav-link'>Dinera</Link></li>
              <li><Link to="#" className='nav-link'>Trodelas</Link></li>
              <li><Link to="#" className='nav-link'>Flexo</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div className="copyright text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div>
            © Copyright <strong><span>MyWebsite</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/LinkJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ --> */}
            Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          <Link to="" className='nav-link'><i className="bi bi-twitter-x"></i></Link>
          <Link to="" className='nav-link'><i className="bi bi-facebook"></i></Link>
          <Link to="" className='nav-link'><i className="bi bi-instagram"></i></Link>
          <Link to="" className='nav-link'><i className="bi bi-linkedin"></i></Link>
        </div>

      </div>
    </div>

  </footer>
  )
}

export default Footer