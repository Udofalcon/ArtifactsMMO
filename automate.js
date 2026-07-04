const Status = require('./server_details/status');

async function main() {
    let status = await new Status().GetServerDetails();

    console.log(status);
}

main();