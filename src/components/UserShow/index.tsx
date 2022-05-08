import { Show, EmailField, TextField, Labeled, SimpleShowLayout, TabbedShowLayout, Tab } from 'react-admin';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

const UserShow = () => (
  <Show title="Detalhes do usuário" sx={{ '& .RaShow-card': { padding: 1 } }}>
    <TabbedShowLayout divider={<Divider flexItem />}>
      <Tab label="Informações">
        <Labeled label="Identificador" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="id" />
        </Labeled>
        <Labeled label="Nome" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="name" />
        </Labeled>
        <Labeled label="Apelido" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="username" />
        </Labeled>
        <Labeled label="Endereço/Rua" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="address.street" />
        </Labeled>
      </Tab>
      
      <Tab label="Contato">
        <Labeled label="E-mail" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <EmailField source="email" />
        </Labeled>
        <Labeled label="Telefone" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="phone" />
        </Labeled>
        <Labeled label="Site" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="website" />
        </Labeled>
        <Labeled label="Empresa" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
          <TextField source="company.name" />
        </Labeled>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default UserShow