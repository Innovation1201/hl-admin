import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    TextInput,
} from "react-admin";


const CalendarFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="user" label="User" reference="api/users" />,
];


export const calendarList = () => (
    <List filters={CalendarFilters}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="user" reference="api/users" link="show" />
            <TextField source="bookingMethod" />
            <TextField source="timezone" />
            <TextField source="inspectionDuration" />
            <TextField source="timeBuffer" />
            <TextField source="appointmentReminder" />
            <TextField source="notificationPreference" />
            <TextField source="notificationPhoneNumber" />
            <TextField source="notificationEmail" />
        </Datagrid>
    </List>
);

