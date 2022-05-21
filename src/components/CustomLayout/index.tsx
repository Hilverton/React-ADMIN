import { Layout } from 'react-admin';
import CustomSidebar from '../CustomSidebar'

const CustomLayout = props => <Layout {...props} sidebar={CustomSidebar} />

export default CustomLayout;