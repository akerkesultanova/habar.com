import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={"https://static.politico.com/dims4/default/26bc198/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F06%2Fa7%2Ff4aa5dd54f038ab7cf98a3a36145%2Fgettyimages-1230276296-1.jpg"} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block" style={{width:"800px"}}>
            <center><h3 style={{backgroundColor:"white",color:"black",width:"fit-content",paddingLeft:"10px",paddingRight:"10px",height:"50px",paddingTop:"7px"}}>Biden launches blitz to prod schools to reopen</h3>
              </center></div>
          </div>
          <div className="carousel-item">
            <img src={"https://static.politico.com/dims4/default/26bc198/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F06%2Fa7%2Ff4aa5dd54f038ab7cf98a3a36145%2Fgettyimages-1230276296-1.jpg"} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-center" style={{width:"800px"}}>
            <center> <h3 style={{backgroundColor:"white",color:"black",width:"fit-content",paddingLeft:"10px",paddingRight:"10px",height:"50px",paddingTop:"7px"}}>Biden launches blitz to prod schools to reopen</h3>
              </center></div>
          </div>
          <div className="carousel-item">
            <img src={"https://static.politico.com/dims4/default/26bc198/2147483647/resize/1160x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F06%2Fa7%2Ff4aa5dd54f038ab7cf98a3a36145%2Fgettyimages-1230276296-1.jpg"} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block text-center" style={{width:"800px"}}>
            <center><h3 style={{backgroundColor:"white",color:"black",width:"fit-content",paddingLeft:"10px",paddingRight:"10px",height:"50px",paddingTop:"7px"}}>Biden launches blitz to prod schools to reopen</h3>
              </center></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        );
    }
}

export default Carousel;