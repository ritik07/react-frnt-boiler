import { CloseOutlined } from '@ant-design/icons'
import React from 'react'

export const getModalTitle = (title, callback) => {
    return (
        <div className="d jc-sb ai-center p-1" style={{backgroundColor:'#374646'}}>
            <div className="">
                <h3 className="fnt-sz-18 m-0" style={{color:'white'}} >{title}</h3>
            </div>
            <div>
                <CloseOutlined onClick={callback}  className="icon-wrapper-modal fnt-sz-18" />
            </div>
        </div>
    )
}
