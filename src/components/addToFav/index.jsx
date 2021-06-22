import React, { useState } from 'react'
import { Tooltip , Modal, Row, Col, Divider, Select, Input, Button } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import { getModalTitle } from '../../lib/extra';
import { ProductCard } from '../cards/productCard';
const { Option } = Select;

export const AddToFav = () => {

    const [visible, setVisible] = useState(false);

    const CustomSelect = () => {
        const [items, setItems] = useState([])
        const [name, setName] = useState('')
        
        const onNameChange = event => {
            setName(event.target.value)        
        };
        
        const addItem = () => {
            if(name!==""){
                setItems([...items, name])
                setName('')
            }
        };

        return (
            <Select
                style={{ width: '100%' }}
                placeholder="select ..."
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                        <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                        <a style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                onClick={addItem}
                        >
                            <PlusOutlined /> Add item
                        </a>
                        </div>
                    </div>
                    )}
            >
                {items.map( item => <Option value={item} key={item}>{item}</Option>)}
            </Select>
    
        )
    }

    const getModalContent = () => {
        return (
            <>
                <Row gutter={[16,16]}>
                    <Col sm={24} xs={24} md={24}>
                        <p>Add this product to your collection of favourities</p>
                    </Col>
                    <Col sm={12} xs={12} md={12}>
                        <ProductCard noAction={true} />
                    </Col>
                    <Col sm={12} xs={12} md={12}>
                        <h3>Please select name for your collection</h3>
                        <CustomSelect />
                        <Button className="mt-10" type="primary ">Add</Button>
                    </Col>
                </Row>
            </>
        )
    }

    const  onCancel = () => setVisible(false)
    return (
        <div>
            <Modal
                closable={false}
                visible={visible}
                onCancel={onCancel}
                footer={null}
            >   
                {getModalTitle("Add To Favourites", onCancel)}
                <div className="p-1">
                    {getModalContent()}
                </div>
            </Modal>
            <Tooltip  title="Add to list"  >
                <PlusOutlined onClick={()=>setVisible(true)} className="icon-wrapper" />
            </Tooltip>
        </div>
    )
}
