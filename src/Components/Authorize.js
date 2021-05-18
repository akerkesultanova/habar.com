import React from 'react';

function Authorize(props) {
    return (
        <div className="container mt-5" style={{height:"540px"}}>
            <div className="row">
            <div className="col-6 offset-3">
                {props.wrongInput?
                <div className="alert alert-danger" role="alert">
                Incorrect email or password.Try again!
                    </div>
                    :
                    ''
            }
            

                <h2>Sign in to add new</h2>
            <form onSubmit={props.handleSubmit}>
      <div className="form-group">
      <label htmlFor="email">Email</label>
          <input value={props.email} onChange={props.handleEmailChange}
          placeholder="..." id="email" name="email" type="email" className="form-control"/>
          
          </div>
          <div className="form-group">
          <label htmlFor="password">Password</label>
          <input value={props.password}  onChange={props.handlePasswordChange}
          placeholder="..." id="password" name="password" type="password" className="form-control"/>
          
          </div>
    
         
                  <div className="form-group">
                      {props.password == "" || props.email == ""?<button className="btn btn-info" disabled>Sign In</button>:
                      <button className="btn btn-info">Sign In</button> } 
                  </div>
          </form>
            </div>

          
            
          </div>

          </div>
    );
}

export default Authorize;