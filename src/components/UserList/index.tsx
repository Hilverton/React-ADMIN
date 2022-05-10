import { List, SimpleList, Datagrid, EmailField, TextField } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const UserList = () =>  {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.email}
          tertiaryText={record => record.username}
        />    
      ) : (
        <Datagrid rowClick="edit">
          <TextField label="Id" source="id" />
          <TextField label="Nome" source="name" />
          <EmailField label="E-mail" source="email" />
          <TextField label="Endereço/Rua" source="address.street" />
          <TextField label="Telefone" source="phone" />
          <TextField label="Site" source="website" />
          <TextField label="Empresa" source="company.name" />
        </Datagrid>
      )}
    </List>
  )
};

export default UserList
