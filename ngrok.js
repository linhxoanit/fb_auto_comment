import ngrok from 'ngrok';

// Your Node.js server setup code here

// Start ngrok and tunnel your local server
(async function () {
    const url = await ngrok.connect({
        proto: 'http', // http|tcp|tls, defaults to http
        addr: 8080,    // Port of your local Node.js server
        authtoken: '2TeH0eYQIArWr66hJiDlu1YCczL_7P4mwm3yzoh3z6HfwKtGc'
    });
    console.log(`Ngrok tunnel is active at ${url}`);
})();
