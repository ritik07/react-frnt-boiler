import React from 'react'
import { AppController } from '../../appController/AppController'
import Home from './web/home'


export const HomePage = ({history}) => {
    return (
        <div>
            <AppController history={history}>
              <Home/>
            </AppController>
        </div>
    )
}
