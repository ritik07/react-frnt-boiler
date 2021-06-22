import React from 'react'
import {Row , Col , Menu} from 'antd'
import { AppController } from '../../appController/AppController'
import { MainWrapper } from '../../lib/wrapper'
import {HeartOutlined} from '@ant-design/icons'
import { ProductCard } from '../../components/cards/productCard'

const { SubMenu } = Menu;

export const FavouritPage = ({history}) => {
    const handleClick = e => {
        console.log('click ', e);
    };

    const getMenu = () => {
        return (
            <Menu
                onClick={handleClick}
                // style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                theme="light"
                mode="inline"
                defaultOpenKeys={['sub1']}
            >
                <SubMenu  key="sub1" icon={<HeartOutlined />} title="My Favourites">
                    <Menu.Item key="1">Default</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }

    return (
        <div>
            <AppController history={history}>
                <MainWrapper>
                    <Row gutter={[16,16]} >
                        <Col sm={24} md={24} xs={24}>
                            <h1 className="fnt-sz-32 m-0">Favourite</h1>
                            <p>Here you can see all your saved collections.</p>
                        </Col>
                        <Col sm={24} xs={24} md={6} lg={6}>
                            {getMenu()}
                        </Col>
                        <Col sm={24} xs={24} md={18} lg={18}>
                            <div className="grid">
                            <ProductCard  removeAction={true} />
                            </div>
                        </Col>
                    </Row>
                </MainWrapper>
            </AppController>
        </div>
    )
}
