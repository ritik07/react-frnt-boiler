import React, { useState } from "react";
import {
    Tooltip,
    Modal,
    Row,
    Col,
    Divider,
    Select,
    Input,
    Button,
    Form,
    InputNumber
} from "antd";
import { getModalTitle } from "../../lib/extra";
import { ProductCard } from "../cards/productCard";
import { PlusOutlined } from "@ant-design/icons";

export const RequestQuote = () => {
    const [visible, setVisible] = useState(false);

    const getModalContent = () => {
        return (
            <>
                <Row gutter={[16, 16]}>
                    <Col sm={24} xs={24} md={12}>
                        <ProductCard noAction={true} />
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                        <Form className="">
                            <Row gutter={[16]}>
                                <Col sm={12} xs={12} md={12}>
                                    <Form.Item label="Quantity">
                                        <InputNumber />
                                    </Form.Item>
                                </Col>
                                <Col sm={12} xs={12} md={12}>
                                    <Form.Item label="City">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col sm={12} xs={12} md={12}>
                                    <Form.Item label="Zipcode">
                                        <InputNumber />
                                    </Form.Item>
                                </Col>
                                <Col sm={12} xs={12} md={12}>
                                    <Form.Item label="your Message">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button className="mt-10" type="primary ">
                                Request
                            </Button>
                        </Form>                        
                    </Col>
                </Row>
            </>
        );
    };

    const onCancel = () => setVisible(false);

    return (
        <div>
            <Modal
                closable={false}
                visible={visible}
                onCancel={onCancel}
                footer={null}
            >
                {getModalTitle("Request Quote", onCancel)}
                <div className="p-1">{getModalContent()}</div>
            </Modal>
            <Button onClick={() => setVisible(true)}>Request Quote</Button>
        </div>
    );
};
