import React from "react";

function Foot() {
    return (<>
    
    <div className="footer-dark">
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3 item">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="col-md-6 item text">
          <h3>BMW Inc.</h3>
          <p>From breathtaking scenic routes to bustling metropoles, from stunning design to conscious sustainability, from iconic heroes of the past to high-tech power houses on wheels of the future – mobility has never been more fascinating – and automobile advancement never so exciting and promising – as it is today.</p>
        </div>
        
      </div>
      <p className="copyright">BMW © 2018</p>
    </div>
  </footer>
</div>

    
    </>)
};

export default Foot;