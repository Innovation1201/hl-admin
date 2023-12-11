import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    TextInput,
} from "react-admin";


const inspectionFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const inspectionList = () => (
    <List filters={inspectionFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="moreInspections" />
            <TextField source="jobCapacity" />
            <TextField source="averageJobs" />
            <TextField source="paymentMethod" />
            <TextField source="completionTime" />
            <TextField source="supplyCostsIncreasing" />
            <TextField source="priceIncreaseLower" />
            <TextField source="priceIncreaseUpper" />
            {/* <TextField source="offer" /> */}
            <TextField source="messageSender" />
        </Datagrid>
    </List>
);

