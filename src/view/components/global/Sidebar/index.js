import { Button, Menu } from 'antd';
import { DatabaseOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { useState } from 'react';

const items = [
    {
        key: 'board',
        label: 'Cabinet Board',
        icon: <DatabaseOutlined />
    },
    {
        key: 'projectSettings',
        label: 'Project Settings',
        icon: <SettingOutlined />
    },
    {
        key: 'team',
        label: 'Teams',
        icon: <TeamOutlined/>
    }
]

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true)

    const handleChangeCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="sidebar">
            <Button onClick={handleChangeCollapse}>
                {
                    collapsed ? 'close' : 'open'
                }
            </Button>
            <Menu 
                items={items}
                mode="inline"
                inlineCollapsed={collapsed}
            /> 
        </div>
    )
};

export default Sidebar;