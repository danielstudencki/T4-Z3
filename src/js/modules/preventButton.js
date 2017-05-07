/*jshint esversion: 6 */

function preventButtonDefault(button) {

    button.onclick = (e) => {
        e.preventDefault();
    };

}

export default preventButtonDefault;