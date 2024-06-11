import React from 'react'

const Contact = () => {
  return (
    <div className="contact content flex col main-center">
        <div className="flex col">
            <span className="heading-m">Get in touch with</span>
            <div className="flex gap16 cross-center">
                <img src="/img/marwinlogowhiters.png" alt="" width={60}/>
                <span className="heading-l">1NE TRAVELS TODAY</span>
            </div>
            <br />
            <span className="subheading-m">Follow us on</span>
            <a href="https://www.facebook.com/1netravelandtours"><img alt="Facebook" style={{width: "32px", height:"32px", objectfit: "cover"}} fetchpriority="high" src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png"/></a>
        </div>
    </div>
  )
}

export default Contact