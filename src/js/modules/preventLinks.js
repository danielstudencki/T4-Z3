/*jshint esversion: 6 */

function preventAnchorLinks(anchors = []) {
    
    for(let a of anchors) {
        a.onclick = (e) => {
            e.preventDefault();
        };
    }

}

export default preventAnchorLinks;