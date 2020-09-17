import { credentials } from './credentials';

const ASSISTANT_ID = '62a85bcf-487e-4f42-a3bc-cea06fe818c3';
const BASE_URL = `https://gateway-lon.watsonplatform.net/assistant/api/v2/assistants/${ASSISTANT_ID}/`;
const VERSION = '2019-02-28';
const CREATE_SESSION = BASE_URL + `sessions?version=${VERSION}`;

export async function createSession() {
    try {
        const response = await axios.post(CREATE_SESSION, {}, { auth: credentials });

        console.log('Created new session', response.data.session_id);
        sessionStorage.setItem('session_id', response.data.session_id);
        return response.data.session_id;
    } catch (err) {
        console.error('Create session error:', err);
    }
}

export async function sendMessage(message) {
    const SEND_MESSAGE = await getSendMessageUri();
    let response;

    try {
        response = await axios.post(
            SEND_MESSAGE,
            {
                input: { text: message },
            },
            { auth: credentials }
        );
    } catch (err) {
        if (err.response.data.error === "Invalid Session") {
            console.warn('Expired session');
            console.warn('Creating new session and retrying...');
            await initChat();
            const newResponseMessage = await sendMessage(message);
            return newResponseMessage;
        } else {
            console.error('Error sending message:', err);
        }
    }

    if (response) {
        console.log(response);
        const responseMessage = response.data.output.generic[0].text;

        return responseMessage;
    }
}

const getSendMessageUri = async function () {
    let sessionId = await (sessionStorage.getItem('session_id') ||
        createSession());

    return BASE_URL + `sessions/${sessionId}/message?version=${VERSION}`;
};