import { Create, SimpleForm, TextInput } from "react-admin";


export const UserCreate = () => {
    return (
        <Create >
            <SimpleForm >
                <TextInput source="email" />
                <TextInput source="password" />
            </SimpleForm>
        </Create>
    );
};