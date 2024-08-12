import { useState } from 'react';
import { Modal, Form, Input, Select, notification } from 'antd';
import { issueTypes, priority, taskStatus } from '../../../../core/constants/issue';
import Editor from '../Editor';
import { doc, setDoc, db } from '../../../../services/firebase/firebase';

const CreateIssueModal = ({ visible, setVisible, users }) => {
    const [ form ] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleCloseModal = () => {
        setVisible(false);
        form.resetFields();
    }

    const handleCreateIssue = async (values) => {
        setConfirmLoading(true);
        const taskDataModel = {
            status: taskStatus.TODO,
            ...values
        }

        console.log(taskDataModel, '>>>>>')
        try{
            const createDoc = doc(db, 'issue', `${Date.now()}`);
            await setDoc(createDoc, taskDataModel);
            setVisible(false);
            notification.success({
                message: `Your task has been created`,
            })
        }catch(error) {
            notification.error({
                message: `${error}`,
                description: ''
            })
        }finally{
            setConfirmLoading(false);
        }
    }

    return (
        <Modal
            title="Create issue"
            okText="Create issue"
            centered
            open={visible}
            width={800}
            confirmLoading={confirmLoading}
            onCancel={handleCloseModal}
            onOk={form.submit}
        >
            <Form layout="vertical" form={form} onFinish={handleCreateIssue}>
                <Form.Item
                    name="issueType"
                    label="Issue Type"
                    rules={[{required: true, message: 'Please Select Issue Type!'}]}
                >
                    <Select 
                        showSearch
                        placeholder="Issue Type"
                        options={issueTypes}
                    />
                </Form.Item>

                <Form.Item
                    name="shortSummary"
                    label="Short Summary"
                    rules={[{required: true, message: 'Please Input Issue Short Summary!'}]}
                >
                  <Input 
                    placeholder="Short Summary"
                  />
                </Form.Item>

            
                <Form.Item 
                    name="description"
                    label="Description"
                    rules={[{required:true, message: 'Please Input Description!'}]}
                >
                    <Editor /> 
                </Form.Item>

                <Form.Item
                    name="reporter"
                    label="Reporter"
                    rules={[{required: true, message: 'Please Select Reporter!'}]}
                >
                    <Select 
                        showSearch
                        placeholder="reporter"
                        options={users}
                    />
                </Form.Item>

                <Form.Item
                    name="assigner"
                    label="Assigner"
                    rules={[{required: true, message: 'Please Select Assigner!'}]}
                >
                    <Select 
                        showSearch
                        placeholder="Priority"
                        options={users}
                    />
                </Form.Item>

                <Form.Item
                    name="priority"
                    label="Priority"
                    rules={[{required: true, message: 'Please Select Priority!'}]}
                >
                    <Select 
                        showSearch
                        placeholder="Priority"
                        options={priority}
                    />
                </Form.Item>
            </Form>   
        </Modal>
    )
};

export default CreateIssueModal;


