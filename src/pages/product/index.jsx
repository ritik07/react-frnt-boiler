import React from 'react'
import { AppController } from '../../appController/AppController'
import { MainWrapper} from '../../lib/wrapper'
import './style.css'
import { ProductCard } from '../../components/cards/productCard'

export const ProductPage = ({history}) => {

    const getFilters =() => {
        return (
            <div></div>
        )
    }

    const getProducts = () => {
        return (
            <div>jkj</div>
        )
    }


    return (
        <div>
            <AppController history={history}>
                <MainWrapper>
                    <div className="mt-30 mb-30 grid">
                        {/* <Row gutter={16}>
                            <Col xs={12} md={12} lg={6} > */}
                                <ProductCard noAction={false} />
                            {/* </Col>
                        </Row> */}
                    </div>
                </MainWrapper>
            </AppController>
        </div>
    )
}
