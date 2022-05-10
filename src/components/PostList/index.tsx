import { List, SimpleList, Datagrid, ReferenceField, TextField } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const PostList = () => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => record.body}
          tertiaryText={record => <ReferenceField label="Escritor" source="userId"           
              reference="users">
            <TextField source="name" />
          </ReferenceField>}
        />    
      ) : (
        <Datagrid rowClick="edit">
          <ReferenceField label="Escritor" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField label="Id" source="id" />
          <TextField label="Título" source="title" />
          <TextField label="Texto" source="body" />
        </Datagrid>
      )}
    </List>
  )
};

export default PostList