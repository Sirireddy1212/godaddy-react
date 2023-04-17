import React from 'react'

export function NavBar1(){
    return(
        <div class="container">

            <nav>
                <ul>
                    <img id="logo"
                        src="download.png"></img>
                    <li><a href="">Domain Names</a></li>
                    <li><a href="">Websites & hosting</a></li>
                    <li><a href="">commerce</a></li>
                    <li><a href="">Email&Marking</a></li>

                </ul>


                <ul class="rightside">
                    <li><a href="">Hire an Expert</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Sign In</a></li>
                    <img class="cart"
                        src="images.png"></img>
                </ul>

            </nav>
        </div>
    )
}


        export function Main() {
            return (
                <main>
             
                <div className="leftmain">
                  <div className="content">
                    <p className="mainmiddle">Websites & Commerce</p>
                    <h2>Tools for all your <br/> business firsts.</h2>
                    <p className="mainmiddle2">Website and store solutions for any small business.<br /><button>Get Started</button> Learn More<br />No credit card required**</p>
                    <img class="mainimage" src="main image (2).jpeg"></img>
                  </div>
                </div>
          
                <div className="rightmain">
                  <p className="mainmiddle">Bundle & Save</p>
                  <h3>Free domain when you get email that matches your domain.</h3>
                  <p className="mainmiddle3">Nice 2 for 1 — a free domain, plus you build trust with email that matches.<br /><button className="rightmainbtn">Get Email & Free Domain</button></p>
                </div>
              
              </main>
            );
          }
                                    
