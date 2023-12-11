import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, EditButton, TextField, EmailField, TextInput } from "react-admin";

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List filters={userFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.first_name}
                    secondaryText={(record) => record.last_name}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="first_name" />
                    <TextField source="last_name" />
                    <EmailField source="email" />
                    <TextField source="status" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
};