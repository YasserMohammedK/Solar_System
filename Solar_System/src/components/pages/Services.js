import React from 'react';
function iframe() {
    return {
        __html: '<iframe src="/contact.html"  style="position:fixed; top:0; left:0; bottom:0; right:0; width:101%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:0;" ></iframe>'
    }
}


export default function Exercises() {
    return (
        <div>
            <div dangerouslySetInnerHTML={iframe()} />
        </div>)
}