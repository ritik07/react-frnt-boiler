import React from 'react'
import { AppController } from '../../appController/AppController'
import { Main } from './Main'
import { CatCard } from './CatCard'
import { MainWrapper } from '../../lib/wrapper'
import './style.css'
import { StatsPage } from './stats'
import { ChoseUsPage } from './choseUs'
import { ImageSection } from './ImageSection'
import { TestimonialPage } from './Testimonial'

export const HomePage = ({history}) => {
    return (
        <div>
            <AppController history={history}>
                <MainWrapper>
                    <Main />
                    <CatCard />
                    <StatsPage />
                    <ChoseUsPage />
                </MainWrapper>
                    <ImageSection />
                    <TestimonialPage />
            </AppController>
        </div>
    )
}
