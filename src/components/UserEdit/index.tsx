import { Edit, SimpleForm, TextInput } from 'react-admin';
import Grid from '@mui/material/Grid';

const PostEdit = () => (
  <Edit title="Edição do usuário">
    <SimpleForm>
      <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Identificador" fullWidth source="id" disabled />
        </Grid>
        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Nome" fullWidth source="name" resettable />
        </Grid>

        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="E-mail" fullWidth source="email" resettable />
        </Grid>

        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Endereço/Rua" fullWidth source="address.street" resettable />
        </Grid>

        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Telefone" fullWidth source="phone" resettable />
        </Grid>

        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Site" fullWidth source="website" resettable />
        </Grid>

        <Grid item xs={1} sm={4} md={4}>
          <TextInput label="Empresa" fullWidth source="company.name" resettable />
        </Grid>

      </Grid>
    </SimpleForm>
  </Edit>
);

export default PostEdit
