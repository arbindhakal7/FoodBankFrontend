import { Component } from "react";
import { Link } from 'react-router-dom';

// import captures from './images/captures.png'
import capture from './images/Capture3.PNG'


export default function Mid(props) {
    return (          
      <div className = "mid" >
						<div id="banner">
							<div>
								<section>
						
                  <img src = {capture} alt = "captures"/>

                  {/* <img src = {captures} alt = "captures"/> */}

                  <br/>
                  <br/>
                  {/* <p className="Primary">      
                    <a href= '/login' color="blue" > Login  </a>
                    </p>					
          				<hr />
									
                    <p className="lead"> New user?      
                    <a href= '/register' color="blue" >   Register Here!  </a>
                    </p>
                */}
								</section>	
										
							</div>
						</div>
           
        </div>
    );
  }

