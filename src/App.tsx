
import { Admin, Resource, radiantLightTheme, radiantDarkTheme } from 'react-admin';
import drfProvider, { fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';
import { UserList } from './users/UserList';
import { UserCreate } from './users/UserCreate';
import { UserEdit } from './users/UserEdit';
import { UserShow } from './users/UserShow';
import {authProvider} from './authProvider';
import { AccountList, AccountEdit } from './subAccount';
import { PhoneList } from './phoneNumber';
import { inspectionList } from './inspectionDetails';
import { contactList } from './contact';
import { A2PList } from './A2PRegistration';
import { calendarList } from './calendar';
import { Dashboard } from './Dashboard';
import UserIcon from "@mui/icons-material/Group";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ContactsIcon from '@mui/icons-material/Contacts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const dataProvider = drfProvider(`${import.meta.env.VITE_REST_ENDPOINT}`, fetchJsonWithAuthToken);

export const App = () => (
    <Admin 
        requireAuth 
        theme={radiantLightTheme}
        darkTheme={radiantDarkTheme}
        dataProvider={dataProvider} 
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource name="api/users" options={{ label: 'Users' }} list={UserList} edit={UserEdit} show={UserShow} recordRepresentation="email" icon={UserIcon} />,
        <Resource name="auth/registration" create={UserCreate} icon={PersonAddAltIcon} />,
        <Resource name="api/subaccounts" options={{ label: 'Sub-Accounts' }} list={AccountList} edit={AccountEdit} icon={PeopleAltIcon} />,
        <Resource name="api/phonenumber" options={{ label: 'Phone Numbers' }} list={PhoneList} icon={PhoneAndroidIcon} />,
        <Resource name="api/inspection-details" options={{ label: 'Inspection Details' }} list={inspectionList} icon={ContentPasteSearchIcon} />,
        <Resource name="api/contact" options={{ label: 'Contacts' }} list={contactList} icon={ContactsIcon} />,
        <Resource name="api/a2p" options={{ label: 'A2PRegistration' }} list={A2PList} icon={MoreHorizIcon} />,
        <Resource name="api/calendar" options={{ label: 'Calendar' }} list={calendarList} icon={CalendarMonthIcon} />,
    </Admin>
);

