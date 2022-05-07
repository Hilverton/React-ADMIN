import { List, Datagrid, EmailField, TextField } from 'react-admin';

const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField label="Id" source="id" />
      <TextField label="Nome" source="name" />
      <EmailField label="E-mail" source="email" />
      <TextField label="Endereço/Rua" source="address.street" />
      <TextField label="Telefone" source="phone" />
      <TextField label="Site" source="website" />
      <TextField label="Empresa" source="company.name" />
    </Datagrid>
  </List>
);

export default UserList
