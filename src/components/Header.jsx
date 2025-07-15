import "./Header.css"

const Header = ()=>{

    return(
        <>
        <section className="hero_section">
            <div className="header">
                <div className="nav">
                    
                        <div className="logo">
                            <img src="/Images/Group 1.png"/>

                        </div>
                       
                    
                    <div className="options">
                        <a href="#">Books </a>
                        <a href="#">Courses</a>
                        <a href="#">Others</a>
                        <a href="#">Blogs</a>
                        <button className="sign-in-btn">Sign in</button>
                    </div>
                </div>

                <div className="hero-page">
                    <div className="hero-content">
                        <p className="hero-ques">Are you ready to Learn?</p>
                        <h2 className="hero-line">Learn With fun <br/>on
                        <span style={{color:"#21B573"}}> any schedule</span></h2>
                        <p  className="lorem-text">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Varius blandit facilisis quam netus.</p>
                        <button className="get-started-btn">Get Started</button>
                    </div>
                    <div className="hero-image">
                        <img src="/Images/Frame.png"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Header