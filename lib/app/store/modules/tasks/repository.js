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
        auth: { username, password },
    });
};

export const fetchTaskTransitions = function(username, password, url, key) {
    return axios.get(`https://${url}/rest/api/2/issue/${key}/transitions`, {
        auth: { username, password },
    });
};

import $ from "jquery";
export const executeTaskTransisiton = function(username, password, url, key, transition) {
    // well ... let's try with jQuery ... appears to be the same..
    // if this is a user agent issue, I don't think I can solve this from within
    // a 'browser' ... maybe I could use a node lib?
    $.ajaxSetup({
        beforeSend: function(request) {
            request.setRequestHeader("User-Agent","Insomnia");
        }
    });
    $.ajax({
        method: "POST",
        url: `http://${url}/rest/api/latest/issue/${key}/transitions`,
        contentType: "application/json",
        data: { transition: { id: transition.id }},
        dataType: "json",
        headers: {
            "X-Atlassian-Token": "no-check",
            "authorization": "Basic dGltQHNweWZ1LmNvbTpOazQ3Z2RiNTA2IQ==",
        }
    })
    // This seems to be close .. doing the req as post with http, and setting
    // the X-Atlassian-Token to no-check gives a new error, and it appears that the issue
    // now may be due to the user agent not being allowed
    // (JIRA REST has a known issue with some user agents, and I get an error trying
    // to override the useragent with axios)
    return axios.post(`http://${url}/rest/api/latest/issue/${key}/transitions`,{
        transition: {
            id: transition.id,
        }
    }, {
        auth: { username, password },
        headers: {
            "X-Atlassian-Token": "no-check",
            'User-Agent': "Riot-Games-Developer-Portal"
        }
    });

    // This was my original Axios style attempt:
    // This results in JIRA throwing an error because it tries to parse
    // file:// as a URI and errors out, even if it got past that step it would be
    // looking for file:// as a whitelisted origin ... and there doesn't appear to be
    // a way to whitelist it in the JIRA ON DEMAND version...
    return axios.post(`https://${url}/rest/api/latest/issue/${key}/transitions`,{
        transition: {
            id: transition.id,
        },
    }, {
        auth: { username, password },
    });
};
