// process is global variable.
if (process.env.NODE_ENV == 'http')
{
    console.log('Start HTTP server');
}
else
{
    console.log('Start HTTPS server');
}
