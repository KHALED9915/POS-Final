import { Layout } from 'antd'
import Title from 'antd/lib/typography/Title';
import './HeaderLayout.css'
const { Header } = Layout;

function HeaderLayout() {
    return (
        <>
            <Layout>
                <Header>
                    <Title className='Title-head' style={{ color: '#FFFFFFD9' }} >Grocery System</Title>
                </Header>
            </Layout>
        </>
    )
}

export default HeaderLayout