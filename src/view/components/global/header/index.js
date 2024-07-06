import { Layout, Button, Typography, Space } from "antd"
import './index.css'
const Header = () => {
    return(
            <Layout.Header className="main_header">
                <Typography.Title level={3}>
                    JIRA
                </Typography.Title>
                
                <Space>
                    <Button>
                        Log In
                    </Button>
                    
                    <Button>
                        Registration
                    </Button>
                </Space>
            </Layout.Header>
    )
}

export default Header