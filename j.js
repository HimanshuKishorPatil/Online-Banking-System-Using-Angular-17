// const arr=[10,20,30]
from ([10,20,30]).subscribe( 
    next => console.log('next:', next), 
    err => console.log('error:', err), 
    () => console.log('the end'), 
    );
    