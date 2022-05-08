import { Show, ReferenceField, TextField, Labeled, SimpleShowLayout } from 'react-admin';
import { Divider } from '@mui/material';

const PostShow = () => (
  <Show title="Detalhes da postagem" sx={{ '& .RaShow-card': { padding: 1 } }}>
    <SimpleShowLayout spacing={2} divider={<Divider flexItem />}>
      <Labeled label="Usuário" sx={{ fontWeight: 'bold', '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
      </Labeled>
      <Labeled label="Identificador" sx={{ fontWeight: 'bold', '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="id" />
      </Labeled>
      <Labeled label="Título" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="title" />
      </Labeled>
      <Labeled label="Texto" sx={{ '& .RaLabeled-label': { fontWeight: 'bold', fontSize: 16 } }}>
        <TextField source="body" />
      </Labeled>
    </SimpleShowLayout>
  </Show>
);

export default PostShow