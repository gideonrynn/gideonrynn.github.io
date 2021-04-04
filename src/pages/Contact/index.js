import React from 'react'

function Contact() {
    return (
        <div>

    {/* <!-- Start Container 1 --> */}
    <div className="container">
        
        {/* <!-- Start Wrapper --> */}
        <div className="wrapper border m-lg-5 m-md-5 m-sm-2">

            {/* <!-- Start Content --> */}
            <div className="content m-5">

                {/* <!-- Start Row -->
                <div className="row">  */}
                    
                    {/* <!-- Start column 1 --> */}
                    <div className="col-lg-12">

                        <div className="sectionheading">
                            <h1 className="section-header">Contact</h1>

                        </div>


                        <form className="p-3">

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="name" className="form-control" placeholder="Tony Stark"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="tony.stark@starkindustries.com"/>
                                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else!</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary" >Submit</button>
                            
                        </form>
                    
                    </div>
                    {/* <!-- Ends column --> */}
                
                </div>
                {/* <!-- Ends Row --> */}
            
            </div>
            {/* <!-- Ends Content --> */}
        
        </div>
        {/* <!-- Ends Wrapper --> */}
        
    {/* <!-- Ends Container 1 -->     */}
    </div>

    )
}

export default Contact
