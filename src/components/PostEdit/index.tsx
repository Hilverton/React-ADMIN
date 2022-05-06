import { Edit, SimpleForm, ReferenceInput, TextInput, Labeled, SelectInput } from 'react-admin';

const PostEdit = () => (
    <Edit title="Edição da postagem">
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput label="Usuário" disabled optionText="name" /></ReferenceInput>
            <TextInput label="Título" source="title" resettable />
            <TextInput label="Texto" multiline source="body" resettable />
        </SimpleForm>
    </Edit>
);

export default PostEdit