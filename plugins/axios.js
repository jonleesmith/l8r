

export default function({ $axios, redirect }, inject) {

    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: "text/plain, */*"
            }
        }
    });

    // Set baseURL to something different
    api.setBaseURL(".netlify/functions/");

    api.onRequest(config => {
        console.log("Making request to " + config.url);
    });

    // api.onError(error => {
    //     const code = parseInt(error.response && error.response.status);
    //     if (code === 400) {
    //         redirect("/400");
    //     }
    // });

    // Inject to context as $api
    inject("api", api);
}
