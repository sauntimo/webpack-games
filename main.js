
require( './main.scss' );
var $ = require("jquery");
require( './functions.js' );

var template = require( './content.pug' );

var skv_local = {};
var str_html = template( skv_local );

$( '.content' ).append( str_html );


dumpTracks();

