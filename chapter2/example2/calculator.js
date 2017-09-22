/*
 * this particular module is like a utility for my application.
 *
 * it's upto you how you design the module, here I am going to create Object notation
 * */

var CALC = {

    add : function(a, b){
        return a+b;
    },

    sub : function(a, b){
        return a-b;
    },

    mul : function(a, b){
        return a*b;
    },

    div : function(a, b){
        return a/b;
    }
};

module.exports = CALC;
