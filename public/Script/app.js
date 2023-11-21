// Immidiate invoked function express

const { Button } = require("bootstrap");
const { event } = require("jquery");
const { deleteModel } = require("mongoose");

(function(){
    function Start(){
        console.log("Application started....");
    }
    window.addEventListener("load",Start);
})();