import React from 'react';

function AddNew(props) {
    return (
        <div className="container mt-5" style={{height:"540px"}}>
            <div className="row">
            <div className="col-6 offset-3">

            {props.success?
            <div className="alert alert-success" role="alert">
                The New added successfully!
            </div>
            :
            ""
        }


                <h2>Add New</h2>
            <form onSubmit={props.handleAddNew}>
      <div className="form-group">
      <label htmlFor="email">Title</label>
          <input value={props.title} onChange={props.handleInputChange}
          placeholder="..." name="title" type="text" className="form-control"/>
          
          </div>
          <div className="form-group">
          <label htmlFor="password">Description</label>
          <input value={props.description} onChange={props.handleInputChange}
          placeholder="..." name="description" type="text" className="form-control"/>
          
          </div>
          <div className="form-group">
          <label>Picture URL</label>
          <input value={props.url} onChange={props.handleInputChange}
          placeholder="..." name="url" type="text" className="form-control"/>
          </div>
          <div className="form-group">
          <label>Category</label>
          {/*<input value={props.category} onChange={props.handleInputChange}
          placeholder="Enter category..." name="category" type="text" className="form-control"/>*/}


            <select className="form-control" name="category" value={props.category} onChange={props.handleInputChange}>
                        <option value="Sport">Sport</option>
                        <option value="Politics">Politics</option>
                        <option value="Technology">Technology</option>
                        <option value="Business">Business</option>
                    </select>
          </div>
         
                  <div className="form-group">
                      {props.title=="" || props.description=="" || props.url==""?
                      <button className="btn btn-info" disabled>Add New</button>
                      :
                      <button className="btn btn-info">Add New</button>
                    }
                      
                  </div>
          </form>
            </div>

          
            
          </div>

          </div>
    );
}

export default AddNew;