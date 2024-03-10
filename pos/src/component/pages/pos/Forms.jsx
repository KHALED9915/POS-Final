import  { useState } from 'react';
import { Form, Select, DatePicker, Row, Col, Layout, Input, Modal, Button } from 'antd';
import './Forms.css'
import { Content } from 'antd/es/layout/layout'
import { PrinterOutlined } from '@ant-design/icons';
import TableData from '../../common-component/TableData';

const { Option } = Select;

function Forms() {
    const [form] = Form.useForm();
    // To control the disabled fields 
    const [isDisabled, setIsDisabled] = useState(true);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleFirstDropdownChange = (value) => {
        setSelectedOption(value);
        setIsDisabled(false);
    };
    const handleOptionChange = (value) => {
        setSelectedOption(value);
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };
    //   handle the print button
    const handlePrint = () => {
        // Open print dialog
        window.print();
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
        setIsModalVisible(false);
        form.resetFields();
    };


    return (
        <>
            {/* First form */}
            <Layout>
                <Content className='content-style'>
                    <Form className='form-design'
                        form={form}
                        layout="horizontal"
                    >
                        <Row className='row-design'>
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
                                <Form.Item label="Branch Voucher" >
                                    <Select style={{ width: 120 }} onChange={handleFirstDropdownChange}>
                                        <Option value="option1">غوشة</Option>
                                        <Option value="option2">البيادر</Option>
                                        <Option value="option3">طبربور</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} >
                                <Form.Item label="Warhouse" >
                                    <Select style={{ width: 120 }} disabled={isDisabled}>
                                        <Option value="option1">المشغل</Option>
                                        <Option value="option2">الرئيسي</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} >
                                <Form.Item label="Voucher #" >
                                    <Select style={{ width: 120 }} disabled={isDisabled}>
                                        <Option value="option1">Option 1</Option>
                                        <Option value="option2">Option 2</Option>
                                        <Option value="option3">Option 3</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6} >
                                <Form.Item label="Pick a Date" name="date" >
                                    <DatePicker disabled={isDisabled} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
                                <Form.Item label="Discount %">
                                    <Input style={{ width: 120 }} disabled={isDisabled}></Input>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
                                <Form.Item label=" Discount Value">
                                    <Input style={{ width: 120 }} disabled={isDisabled}></Input>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                                <Form.Item label="Supplier" className='label-design' >
                                    <Select style={{ width: 500 }} disabled={isDisabled} onChange={handleOptionChange}>
                                        <Option value="مؤسسة الأكرام للتسويق">مؤسسة الأكرام للتسويق</Option>
                                        <Option value="مصنع عمرة للأملاح">مصنع عمرة للأملاح</Option>
                                        <Option value="شركة ضفاف النهرين للصناعات الغذائيه والعصائر"> شركة ضفاف النهرين للصناعات الغذائيه والعصائر </Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form >
                    {/* design the modal pop form */}
                    <Modal
                        title="Suppler Info Entry"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}


                    >
                        <Form
                            form={form}
                            layout="horizontal"
                            onFinish={onFinish}
                            className='model-design'
                        >
                            <Form.Item>
                                <Input disabled value={`${selectedOption}`} />
                            </Form.Item>
                            <Form.Item label="Suppler Invoice #" name="input" rules={[{ message: 'Please input something!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Suppler Invoice Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Payment Due Date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item label="Payment Method" >
                                <Select>
                                    <Option value="CASH">CASH</Option>
                                    <Option value="CREDIT"></Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className='Button-design'>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <TableData />
                    <Button type="primary" onClick={handlePrint} icon={<PrinterOutlined />} className='print-button'>
                        Print
                    </Button>
                </Content>
            </Layout>
        </>
    )
}

export default Forms
