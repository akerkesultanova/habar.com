import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <footer className="bottom mt-2" style={{height:"70px",backgroundColor:"#235a78"}}>
          <div className="container text-center" style={{paddingTop:"20px",color:"white",fontSize:"110%"}}>
          Copyright © HABAR.com 2021
          </div>
      </footer>
        );
    }
}

export default Footer;