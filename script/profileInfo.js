
import {APP_ID, APP_SECRET, GRAPH_URL, VERSION} from "./constant.js";

export default async function handler(memberToken) {
    const appToken = await getAppAccessToken();
    debugToken(appToken, memberToken);
}

export async function getAppAccessToken() {
    const params = {
        grant_type: 'client_credentials',
        client_id: APP_ID,
        client_secret: APP_SECRET,
    };
    const url = `${GRAPH_URL}/${VERSION}/oauth/access_token?${objectToQueryString(params)}`;
    try {
        const response = await fetch( url,{
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const customResponse = {
            success: true,
            accessToken: data.access_token,
            expiresIn: data.expires_in,
            tokenType: data.token_type,
        };

        return customResponse.accessToken;
    } catch (error) {
        console.error('Error getting app access token:', error);
        throw error;
    }
}

export async function debugToken(appToken, memberToken) {
    const params = {
        input_token: memberToken,
        access_token: appToken,
    };
    const url = `${GRAPH_URL}/${VERSION}/debug_token?${objectToQueryString(params)}`;
    try {
        const response = await fetch( url,{
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const customResponse = {
            app_id: data.data.app_id,
            scopes: data.data.scopes,
            user_id: data.data.user_id,
        };
        console.log('data', customResponse)

        return customResponse;
    } catch (error) {
        console.error('Error getting app access token:', error);
        throw error;
    }
}



const objectToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return keyValuePairs.join('&');
}