import React from 'react'
import ReactSlider from 'react-slider'

const Slider = () => {
  return (
    <div className="slider">
        hello
        <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
    </div>
  )
}

export default Slider