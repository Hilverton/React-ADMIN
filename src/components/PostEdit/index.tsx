import { Edit, SimpleForm, ReferenceInput, TextInput, Labeled, SelectInput } from 'react-admin';
import Grid from '@mui/material/Grid';

const PostEdit = () => (
    <Edit title="Edição da postagem">
        <SimpleForm>
          <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item xs={1} sm={4} md={6}>
              <ReferenceInput source="userId" reference="users">
                <SelectInput label="Usuário" fullWidth disabled optionText="name" />   
              </ReferenceInput>
            </Grid>
            <Grid item xs={1} sm={4} md={6}>
              <TextInput label="Título" fullWidth source="title" resettable />
            </Grid>
            <Grid item xs={1} sm={8} md={12}>
              <TextInput label="Texto" fullWidth multiline source="body" resettable />
            </Grid>
          </Grid>  
        </SimpleForm>
    </Edit>
);

export default PostEdit