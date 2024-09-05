import { useContext, useEffect, useState} from 'react';
import { Modal, Form, notification, Typography, Space } from 'antd';
import { ISSUE_OPTION } from '../../../../core/constants/issue'; 
import { doc, updateDoc, db } from '../../../../services/firebase/firebase';
import IssueModalForm from '../IssueModalForm';
import { AuthContext } from '../../../../context/AuthContext';
const { Text } = Typography
const EditIssueModal = ({ visible, onClose, issueData }) => {
    const [ form ] = Form.useForm();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { handleGetIssues } = useContext(AuthContext);
    const handleClose = () => {
        onClose();
    }

    useEffect(() => {
        const { key, ...restData} = issueData
        form.setFieldsValue(restData)
    }, [issueData, form])

    const handleEditForm = async values => {
        setConfirmLoading(true)
        const docRef = doc(db, 'issue', issueData.key)
        await updateDoc(docRef, values)
        handleClose()
        handleGetIssues()
        notification.success({
            message: 'Your task has been updated'
        })
        try {

        } 
        catch(error) {
            console.log(error)
        } 
        finally {
            setConfirmLoading(false)
        }
    }
   
    console.log(issueData)
    return (
        <Modal
            title={
                <Space>
                    {ISSUE_OPTION[issueData.issueType].icon}
                    <Text>
                        {' '}
                        {ISSUE_OPTION[issueData.issueType].label}
                        {"-"}
                        {issueData.key}
                    </Text>
                </Space>
            }
            okText="Edit Ijssue"
            centered
            confirmLoading={confirmLoading}
            onCancel={handleClose}
            open={visible}
            onOk={form.submit}
            width={800}
            styles={{
                body: {
                    maxHeight: '550px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    padding: 10
                }
            }}
        >
            <IssueModalForm
                form={form}
                onFinish={handleEditForm}
            />
        </Modal>
    )
}

export default EditIssueModal