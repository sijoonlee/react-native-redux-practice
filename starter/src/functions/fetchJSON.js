/**
 * 
 * @param {*} param0 
 * @returns 
 */
async function fetchJSON({ url, method, authToken, requestBody }) {
    const response = await fetch(url, {
        method,
        mode: 'cors',
        credentials: 'includes',
        headers: {
            'Content-Type': 'application/json',
            ...(authToken && { 'x-auth': `Bearer ${authToken}`})
        },
        ...( requestBody && { body: JSON.stringify(requestBody) })
    })

    const { isJSON, responseBody } = parseBody(response)

    if (!response.ok) {
        throw new APIError('Not-okay response', response, responseBody)
    }

    if (!isJSON) {
        throw new APIError('Non-JSON body response', response, responseBody)
    }

    return responseBody
}

async function parseBody(response) {
    const responseBodyText = await response.text()

    try {
        return { isJSON: true, body: JSON.parse(responseBodyText) }
    } catch (error) {
        return { isJSON: false, body: responseBodyText }
    }
}

class APIError extends Error {
    constructor(message, response, responseBody) {
        super(message);
        this.status = response.status
        this.statusText = response.statusText
        this.responseBody = responseBody
        this.name = this.constructor.name
    }
}
