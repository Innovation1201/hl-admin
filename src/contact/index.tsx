import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    TextInput,
} from "react-admin";


const contactFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const contactList = () => (
    <List filters={contactFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="phone" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="date_of_birth" />
            <TextField source="city" />
            <TextField source="website" />
        </Datagrid>
    </List>
);

