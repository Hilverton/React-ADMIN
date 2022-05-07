import { Show, EmailField, TextField, Labeled, SimpleShowLayout } from 'react-admin';
import { Divider } from '@mui/material';

const UserShow = () => (
  <Show title="Detalhes do usuário">
    <SimpleShowLayout spacing={2} divider={<Divider flexItem />}>
      <Labeled label="Identificador" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="id" />
      </Labeled>
      <Labeled label="Nome" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="name" />
      </Labeled>
      <Labeled label="Apelido" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="username" />
      </Labeled>
      <Labeled label="E-mail" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="email" />
      </Labeled>
      <Labeled label="Endereço/Rua" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="address.street" />
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
    </SimpleShowLayout>
  </Show>
);

export default UserShow