import { color } from '@mui/system'
import { Link } from "react-router-dom";

import React from 'react'
export const Home = (props) => {

    return (


        <div className='landing'>
            <div className="title">
                <h1>Army Veteran</h1>
                <i >Uniting warriors past and present for a brighter future</i>
            </div>
            <div className='main'>
            <Link to="/pension">
            <div className='text'  >

                <img src="/img/first.png" alt=""  />
                <h3 >Know your Pension </h3>
                <p>Pension schemes for armed forces provide financial security to military personnel after their retirement from active service.


                </p>
            </div></Link>
            <Link to="/blogs">
            <div className='text' >
                <img src="/img/second.png" alt=""  />
                <h3>Share your experience</h3>
                <p>Army veteran experience can vary widely depending on the individual's background, branch of service, and deployment history.
                </p>
            </div></Link>
            <Link to="/donations">
            <div className='text' >
                <img src="/img/third.png" alt="" />
                <h3>Donate to others</h3>
                <p>Donating to organizations that support the families of deceased armed forces personnel is a way to honor the sacrifices made by these service members and their loved ones.
                </p>
            </div></Link>
        </div></div>

    )
}