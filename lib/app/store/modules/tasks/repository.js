import axios from 'axios';
const remote = require('electron').remote;
const request = remote.require('request');

export const fetchAllTasksForUser =  function(username, password, url) {
    return axios.get(`https://${url}/rest/api/2/search`, {
        params: {
            jql: "assignee=currentUser() AND statusCategory not in (Done)",
            startAt: 0,
            maxResults: 10000,
            fields: '*all',
            fieldsByKeys: true,
        },
        auth: { username, password },
    });
};

export const fetchTask = function(username, password, url, key) {
    return axios.get(`https://${url}/rest/api/2/issue/${key}`, {
        auth: { username, password },
    });
};

export const fetchTaskTransitions = function(username, password, url, key) {
    return axios.get(`https://${url}/rest/api/2/issue/${key}/transitions`, {
        auth: { username, password },
    });
};


export const executeTaskTransisiton = function(username, password, url, key, transition) {
    return new Promise(function (resolve, reject) {
        let requestOptions = {
            url: `https://${url}/rest/api/latest/issue/${key}/transitions`,
            method: "POST",
            auth: { username, password },
            body: {
                transition: {
                    id: transition.id,
                },
            },
            json: true,
        };

        request(requestOptions, (error, response, body) => {
            console.log('in request callback!');
            console.log('error: ', error);
            console.log('response: ', response);
            console.log('body: ', body);
            resolve(response);
        });
    });
};
