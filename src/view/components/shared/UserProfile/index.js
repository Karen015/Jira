
import { Avatar, Dropdown, Typography, Flex, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography

const user = {
    firstName: 'Davit',
    lastName: 'Sargsyan',
    headline: 'front end developer',
    email: 'karen.aghajanyan.11@gmail.com',
    logOut: ''

}

const items = [
    {
        key: '',
        label: (
            <Flex vertical align='center'>
                <Avatar 
                    size={64} 
                    icon={<UserOutlined />}
                />

                <Text>
                    Karen Aghajanyan
                </Text>

                <Text underline>
                    karen.aghajanyan.11@gmail.com
                </Text>
            </Flex>
        )
    },
    {
        key: 'logout',
        label: 'Logout'
    }
]

const UserProfile = () => {
    return (
        <Dropdown   
            menu={{
                items
            }}
        >

            <Avatar size={"large"}>
                KA
            </Avatar>


        </Dropdown>
    )
}

export default UserProfile