import { List, Datagrid, ReferenceField, TextField } from 'react-admin';

const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField label="Escritor" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="Id" source="id" />
      <TextField label="Título" source="title" />
    </Datagrid>
  </List>
);

export default PostList