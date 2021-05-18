import React, { Component } from 'react';

function Pagination(props) {
  
    const arr = new Array();
    for(var i =0;i<props.pageNum;i++){
      arr.push(<li   className="page-item"><a key={i} id={i} onClick={props.handleBeginChange}  className="page-link" href="#">{i+1}</a></li>);
    }
      if(props.pageNum!=0){
        return (
          <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {arr}
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      );
      }
      else{
        return <div>
          
        </div>
      }
        
    }

export default Pagination;