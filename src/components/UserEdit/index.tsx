import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit = () => (
    <Edit title="Edição do usuário">
        <SimpleForm>
          <TextInput label="Id" source="id" disabled />
            <TextInput label="Nome" source="name" resettable />
            <TextInput label="E-mail" source="email" resettable />
            <TextInput label="Endereço/Rua" source="address.street" resettable />
            <TextInput label="Telefone" source="phone" resettable />
            <TextInput label="Site" source="website" resettable />
            <TextInput label="Empresa" source="company.name" resettable />
        </SimpleForm>
    </Edit>
);

export default PostEdit
