import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SimpleMessage.css'

type SimpleMessageProps = {
  text?: string
  className?: string
  extraLine?: string
}

export default function SimpleMessage({
    
  text =  'HI WHAT HAPPEN TO YOU MY CUTIEE',
  className = '',
  extraLine = ' '
}
: SimpleMessageProps) {
  const navigate = useNavigate()

  return (
    <div className={`sm-wrapper ${className}`}>
      <div className="sm-card" role="article" aria-label="Simple message card">
        <div className="sm-content">
          <p className="sm-title">{text}</p>
          <p className="sm-line">{extraLine}</p>

          <p className="sm-sub">
            <center>"YOU'RE THINKING THAT YOU GAVE HIM A GIFT AND HE DIDN'T SAY ANY GOOD WORDS ABOUT IT."</center>
            <center>"AND HE IS AN UNKIND-HEARTED MAN AND A HURTFUL PARTNER....."</center> 
            <center>"I JUST WASTED MY TIME ON THIS HARD-HEARTED MAN..."</center> 
            </p>

          


          {/* Heart button: visually balanced, sits centered below actions on small screens,
              and sits to the right on wider screens. */}
          <div className="sm-heart-wrap" aria-hidden={false}>
            <button
              className="sm-heart-btn"
              onClick={() => navigate('/next')}
              aria-label="Go to next page"
            >
              <span className="sm-heart" aria-hidden="true">❤</span>
            </button>
          </div>
        </div>

        {/* decorative overlay - purely visual */}
        <div aria-hidden className="sm-overlay">
          <div className="sm-slime-blob" />
          <div className="sm-slime-drip drip-1" />
          <div className="sm-slime-drip drip-2" />
          <div className="sm-slime-drip drip-3" />
        </div>
      </div>
    </div>
  )
}
