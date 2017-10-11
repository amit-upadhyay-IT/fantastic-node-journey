
function printWorld()
{
    setTimeout (function (){
        console.log('World');
    }, 1000);
}
printWorld();
console.log('Hello'); // this gets printed first because the above function is pushed into the event queue (not onto the call stack)
