import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    TextInput,
} from "react-admin";


const PhoneFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const PhoneList = () => (
    <List filters={PhoneFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="phone_number" />
            <TextField source="purchased_on" />
        </Datagrid>
    </List>
);

