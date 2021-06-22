import React from 'react'
import { Tooltip, Button} from 'antd'
import { PlusOutlined, FolderOutlined, CloseOutlined} from '@ant-design/icons'
import DummyImage from '../../assets/images/dummy.jpg'
import './style.css'
import { AddToFav } from '../addToFav'
import { RequestQuote } from '../requestQuote'

export const ProductCard = ({noAction, removeAction}) => {
    return (
        <div className="product-card">
            <div className="card-image-wrapper mb-10">
                {/* image */}
                <div className="card-image cs-not-for-mobile">
                    <img style={{width:'70%'}} src={DummyImage} alt="dummy" />
                </div>
                <div className="card-image cs-only-for-mobile">
                    <img style={{width:'40%'}} src={DummyImage} alt="dummy" />
                </div>
                {/* actions */}
                {noAction ? null : <><div className="card-action">
                    <AddToFav />
                    <Tooltip title="View Details">
                        <FolderOutlined className="icon-wrapper ml-10" />
                    </Tooltip>
                    {/* {removeAction && 
                    <Tooltip title="Remove this from favourite">
                        <CloseOutlined className="icon-wrapper ml-10" />
                    </Tooltip>} */}
                </div>
                <div className="card-action on-hover">
                    <RequestQuote />
                </div></>}
            </div>
            {/* title */}
            <h2 className="m-0 product-title">Dummy Title</h2>
            <p className="m-0"><b>dummy cat</b></p>
        </div>
    )
}
