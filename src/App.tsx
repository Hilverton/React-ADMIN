import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import brazilianMessages from 'ra-language-pt-br';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/People';

const i18nProvider = polyglotI18nProvider(() => brazilianMessages, 'pt-br');
import './App.css';
import PostList from './components/PostList'
import PostShow from './components/PostShow'
import PostEdit from './components/PostEdit'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

export default function App() {
  return <Admin title="Meu painel administrativo" i18nProvider={i18nProvider} dataProvider={dataProvider}>
    <Resource name="posts" options={{ label: 'Postagens' }} list={PostList} edit={PostEdit} show={PostShow} icon={PostIcon}/>
    <Resource name="users" options={{ label: 'Usuários' }} list={ListGuesser} edit={EditGuesser} show={ShowGuesser} icon={UserIcon}/>
  </Admin>;
}