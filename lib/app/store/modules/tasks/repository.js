import axios from 'axios';
import Base64 from 'Base64';

export const fetchAllTasksForUser =  function(username, password, url) {
    console.log(`fetching tasks for ${username} with ${password} from ${url}`);
    return axios.get(`https://${url}/rest/api/2/search`, {
        params: {
            jql: "assignee=currentUser()",
        },
        headers: {
            'Authorization': `Basic ${Base64.btoa(username + ':' + password)}`
        },
    });
};
