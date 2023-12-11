import { AuthProvider } from 'react-admin';

const roleDefinitions = {
    admin: [{ action: '*', resource: '*' }],
    reader: [{ type: 'deny', action: '*', resource: '*' }],
};

export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        const request = new Request(`${import.meta.env.VITE_REST_ENDPOINT}/auth/login/`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('token', auth.key);
                // return Promise.resolve();
                const request = new Request(`${import.meta.env.VITE_REST_ENDPOINT}/auth/user/`, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': `Token ${localStorage.getItem('token')}` }),
                });
                return fetch(request)
                    .then(response => {
                        if (response.status < 200 || response.status >= 300) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.is_superuser) {
                            localStorage.setItem(
                                'permissions',
                                JSON.stringify(roleDefinitions.admin)
                            );
                        }else {
                            localStorage.setItem(
                                'permissions',
                                JSON.stringify(roleDefinitions.reader)
                            );
                        }
                        localStorage.setItem(
                            'profile',
                            JSON.stringify(data)
                        );
                        return Promise.resolve()
                    })
                    .catch(() => {
                        throw new Error('Network error')
                    });
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () => {
        const profile = localStorage.getItem('profile');
        if (!profile) {
            return Promise.reject("No profile found");
        }

        const userProfile = JSON.parse(profile);

        const userIdentity = {
            id: userProfile.id,
            fullName: `${userProfile.first_name} ${userProfile.last_name}`.trim(),
        };

        return Promise.resolve(userIdentity);
    },
    getPermissions: () => {
        const permissions = JSON.parse(localStorage.getItem('permissions') || "");
        return Promise.resolve(permissions);
    },
};