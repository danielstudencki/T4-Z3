/*jshint esversion: 6 */

import "../sass/main.scss";

import preventAnchorLinks from "./modules/preventLinks";
import preventButtonDefault from "./modules/preventButton";

let submitButton = document.querySelector('#submit-button');
let navItems = document.querySelectorAll('.nav-item');

preventButtonDefault(submitButton);
preventAnchorLinks(navItems);