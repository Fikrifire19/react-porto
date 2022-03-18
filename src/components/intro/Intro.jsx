import React from 'react'
import "./intro.css"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Fikri Mubarok</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Digital Marketer</div>
                        <div className="i-title-item">Junior Graphic Designer</div>
                        <div className="i-title-item">Web Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam voluptatibus at alias debitis ad inventore tenetur perspiciatis reprehenderit? Amet sequi quis temporibus mollitia modi suscipit adipisci, laudantium iste est?
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src="" alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro