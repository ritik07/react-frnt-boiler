import React from 'react'
import WebLayouts from './web'

const Layouts = () => {
  return (
    <div>
      <div className="cs-show-web">
        <WebLayouts />
      </div>
      <div className="cs-show-mobile">
        <WebLayouts />
      </div>
    </div>
  )
}

export default Layouts
