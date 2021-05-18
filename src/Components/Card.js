import React, { Component } from 'react';

class Card extends Component {

  
  
    render() {
        return (
            <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={this.props.new.url}
      style={{paddingTop:"15px",paddingLeft:"15px",paddingBottom:"15px"}} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{this.props.new.title}</h5>
        <p className="card-text">{this.props.new.description}</p>
        <p className="card-text text-sm-right" style={{paddingRight:"20px"}}><small className="text-muted"><strong>{this.props.new.date.toLocaleDateString()+" "+this.props.new.date.toLocaleTimeString()}</strong></small></p>
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Card;