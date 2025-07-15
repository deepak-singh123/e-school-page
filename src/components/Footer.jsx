 
import "./Footer.css"

  const Footer=()=>{
    return(
        <>
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-binder">
                <div className="footer-text">
                    Millions of people of all ages and from around
the world are improving their lives with us
                </div>

                <div className="footer-content">
                    <div className="footer-course">
                        <h2>Course</h2>
                        
                        <div className="contents">
                        <a href="#">Graphic Design</a>
                        <a href="#">Web Design</a>
                        <a href="#">Business</a>
                        <a href="#">Marketing</a>
                        <a href="#">Engineering</a>
                        </div>
                        
                    </div>
                    <div className="footer-course">
                         <h2>Terms</h2>
                        <div className="contents">
                        <a href="#">Graphic Design</a>
                        <a href="#">Web Design</a>
                        <a href="#">Business</a>
                        <a href="#">Marketing</a>
                        <a href="#">Engineering</a>
                        </div>
                    </div>
                    <div className="footer-course">
                         <h2>Useful Links</h2>
                        <div className="contents">
                        <a href="#">Graphic Design</a>
                        <a href="#">Web Design</a>
                        <a href="#">Business</a>
                        <a href="#">Marketing</a>
                        <a href="#">Engineering</a>
                        </div>
                    </div>

                </div>
                </div>
                <div className="copyright">
                   <p>Copyright © 2020 Rokomari.com</p>
                </div>
            </div>
        </footer>
        </>
    )
  }

  export default Footer