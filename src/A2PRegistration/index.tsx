import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    TextInput,
} from "react-admin";


const a2pFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const A2PList = () => (
    <List filters={a2pFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="status" />
            <TextField source="last_updated" />
        </Datagrid>
    </List>
);

