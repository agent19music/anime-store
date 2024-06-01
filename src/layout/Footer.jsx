import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
         
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      
      <div>
        <Link to="https://www.facebook.com/sean.monroe.9003?mibextid=ZbWKwL" className="me-4 link-secondary" target='blank'>
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="https://twitter.com/ufwsean" target='blank'className="me-4 link-secondary">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="mailto:seanmotanya@gmail.com"target='blank' className="me-4 link-secondary">
          <i className="fab fa-google"></i>
        </Link>
        <Link to="https://instagram.com/ufwsean?igshid=OGQ5ZDc2ODk2ZA==" target='blank'className="me-4 link-secondary">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/sean-motanya-532619282/" target='blank' className="me-4 link-secondary">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/agent19music" target='blank' className="me-4 link-secondary">
          <i className="fab fa-github"></i>
        </Link>
      </div>
       </section>
    
  
      <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary"></i>ANIME-STORE
            </h6>
            <p>
              The home of your favourite animes' merchandise and more !!
            </p>
          </div>
         
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">
              Navigate
            </h6>
            <p>
              <Link to="/animelist" className="text-reset">Home</Link>
            </p>
            <p>
              <Link to="/feedback" className="text-reset">User Feedback</Link>
            </p>
            <p>
              <Link to="/contact" className="text-reset">Contact</Link>
            </p>
            
          </div>
          
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              More
            </h6>
            <p>
              <Link to="/donate" className="text-reset">Donate</Link>
            </p>
            <p>
              <Link to="/termsofservice" className="text-reset">Terms of service</Link>
            </p>
            
          </div>
                 
  
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3 text-secondary"></i> Nairobi Bankai Towers</p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              seanmotanya@gamail.com
            </p>
            <p><i className="fas fa-phone me-3 text-secondary"></i> + 254 745 071 299</p>
            <p><i className="fas fa-print me-3 text-secondary"></i> + 971 582 301 251</p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center p-4" >
      © 2023 Copyright:
      <Link className="text-reset fw-bold" to="/">animestore All rights reserved</Link>
    </div>
    
  
  
          
      </div>
  )
}
