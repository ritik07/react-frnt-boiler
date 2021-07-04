import React from 'react'
import { AppController } from '../../appController/AppController'
import WebHome from '../../components/home/web'


export const HomePage = ({ history }) => {
  return (
    <AppController history={history}>
      <div className="cs-show-web">
        <WebHome />
      </div>
      <div className="cs-show-mobile">

      </div>
    </AppController>
  )
}
