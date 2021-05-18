import React, { Component } from 'react';

class Blog extends Component {
constructor(props) {
  super(props);
  
}
    render() {
        return (
<div className="media mb-3" style={{backgroundColor:"#e0e7ff"}}>
  <div className="row no-gutters">
          <div className="col-2">
          <img src={this.props.image} style={{paddingTop:"15px",paddingLeft:"15px",width:"75px",height:"75px"}} className="mr-3" alt="..."/>
          </div>
          <div className="col-10">
          <div className="media-body" style={{paddingLeft:"15px",paddingTop:"15px",paddingRight:"15px"}}>
            <h5 className="mt-0 mb-1">{this.props.author}</h5>
            <p>{this.props.blogText}</p>
            <a href="#" style={{color:"#064270",fontWeight:"bold"}}>Read More</a>
            <p className="float-right"><small style={{fontWeight:"bold"}}>Posted at {this.props.time}</small></p>
          </div>
          </div>
  </div>
</div>
        );
    }
}

export default Blog;