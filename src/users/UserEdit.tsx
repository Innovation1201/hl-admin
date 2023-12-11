import { Edit, SimpleForm, TextInput } from "react-admin";
import { UserTitle } from "./UserTitle"


export const UserEdit = () => {
    return (
        <Edit title={<UserTitle />}>
            <SimpleForm >
                <TextInput source="id" InputProps={{ disabled: true }} />
                <TextInput source="first_name" />
                <TextInput source="last_name" />
                <TextInput source="email" />
                <TextInput source="status" />
            </SimpleForm>
        </Edit>
    );
};