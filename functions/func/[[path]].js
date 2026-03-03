
export async function onRequest(context) {

    /** @type {Request} */
    const request = context.request;

    return new Response("Hi", {
        status: 200,
        headers: { "Content-Type": "text/plain" }
    });

}

