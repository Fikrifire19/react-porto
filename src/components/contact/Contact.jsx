import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="" alt="" className="c-icon" />
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along. me.
                </p>
                <form>
                    <input type="text" placeholder="Name" name="user-name" />
                    <input type="text" placeholder="Subject" name="user-subject" />
                    <input type="text" placeholder="Email" name="user-email" />
                    <textarea name="message" placeholder="Message" rows="10"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact