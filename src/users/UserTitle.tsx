import { useRecordContext } from "react-admin";


export const UserTitle = () => {
    const record = useRecordContext();
    return <span>User {record ? `"${record.id}"` : ''}</span>;
};