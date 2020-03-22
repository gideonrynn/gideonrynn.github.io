import React from 'react'

function Contact() {
    return (
        <div>

    {/* <!-- Start Container 1 --> */}
    <div class="container">
        
        {/* <!-- Start Wrapper --> */}
        <div class="wrapper border m-lg-5 m-md-5 m-sm-2">

            {/* <!-- Start Content --> */}
            <div class="content m-5">

                {/* <!-- Start Row -->
                <div class="row">  */}
                    
                    {/* <!-- Start column 1 --> */}
                    <div class="col-lg-12">

                        <div class="sectionheading">
                            <h1>Contact</h1>

                        </div>


                        <form class="p-3">

                            <div class="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="name" className="form-control" placeholder="Tony Stark"/>
                            </div>

                            <div class="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="tony.stark@starkindustries.com"/>
                                <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else!</small>
                            </div>

                            <div class="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea class="form-control" id="message" rows="3"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" >Submit</button>
                            
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
