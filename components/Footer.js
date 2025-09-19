import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-7 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>CATEGORIES</h3>
                <ul>
                  <li><Link href="#">Skincare</Link></li>
                  <li><Link href="#">Haircare</Link></li>
                  <li><Link href="#">Bodycare</Link></li>
                  <li><Link href="#">Aroma</Link></li>
                  <li><Link href="#">Scent</Link></li>
                  <li><Link href="#">Intimate</Link></li>
                  <li><Link href="#">Combos</Link></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>QUICK LINKS</h3>
                <ul>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Contact Us</Link></li>
                  <li><Link href="#">Lookbook</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Terms & Conditions</Link></li>
                  <li><Link href="#">FAQs</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-5 col-sm-12">
            <div className="row">
              <h3 className="text-center">CONTACT INFORMATION</h3>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <p>43, opp Metro Pillar 72, near Khachariyawas</p>
                <p>House, Mahent Nagar, Jai Ambey Colony,</p>
                <p>Civil Lines, Jaipur, Rajasthan 302006</p>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <p>Mobile: +91-9636765900</p>
                <p>E-mail: customercare@avvya.in</p>
                <p>Whatsapp: +91-9636765900</p>
                <div className="social-links">
                  <ul>
                    <li><Link href="#"><span className="fa-brands--youtube"></span></Link></li>
                    <li><Link href="#"><span className="fa-brands--instagram"></span></Link></li>
                    <li><Link href="#"><span className="fa-brands--linkedin"></span></Link></li>
                    <li><Link href="#"><span className="fa--facebook"></span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="copyright">© 2025 Avyya Lifestyle. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}