import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";
import { useRecordContext } from "react-admin";


const AccountTitle = () => {
    const record = useRecordContext();
    return <span>Account:  {record ? `${record.legal_business_name}` : ''}</span>;
};

const AccountFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const AccountList = () => (
    <List filters={AccountFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="business_name" />
            <TextField source="business_email" />
            <TextField source="business_phone" />
            <TextField source="website" />
            <EditButton />
        </Datagrid>
    </List>
);

export const AccountEdit = () => (
    <Edit title={<AccountTitle />}>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="user" reference="api/users" />
            <TextInput source="business_name" />
            <TextInput source="business_email" />
            <TextInput source="business_phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Edit>
);

