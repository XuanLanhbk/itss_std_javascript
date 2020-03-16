#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
var array = [];
for (const arg of process.argv){
    array.push(arg)
}
for(var i = array.length; i >= 0; i--){
    console.log(i + "番目は" + array[i] + 'です');
}
