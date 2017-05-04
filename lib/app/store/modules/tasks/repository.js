import axios from 'axios';
import Base64 from 'Base64';

export const fetchAllTasksForUser =  function(username, password, url) {
    return axios.get(`https://${url}/rest/api/2/search`, {
        params: {
            jql: "assignee=currentUser() AND statusCategory not in (Done)",
            startAt: 0,
            maxResults: 10000,
            fields: '*all',
            fieldsByKeys: true,
        },
        headers: {
            'Authorization': `Basic ${Base64.btoa(username + ':' + password)}`
        },
    });
};

export const fetchTaskTransitions = function(username, password, url, key) {
    return axios.get(`https://${url}/rest/api/2/issue/${key}/transitions`, {
        headers: {
            'Authorization': `Basic ${Base64.btoa(username + ':' + password)}`
        },
    });
};

export const executeTaskTransisiton = function(username, password, url, key, transition) {
    return axios.post(`https://${url}/rest/api/2/issue/${key}/transitions`, {
        transition: {
            id: transition.id,
        }
    }, {
        headers: {
            'Authorization': `Basic ${Base64.btoa(username + ':' + password)}`
        }
    });
};
