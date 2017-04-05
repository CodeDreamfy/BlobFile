var $ = require('jquery');
// var JSZip = require("jszip");
// var JSZipUtils = require("./JSZipUtils");
// var zip = new JSZip();

$(function(){
	function showError(elt, err) {
    elt.innerHTML = "<p class='alert alert-danger'>" + err + "</p>";
  }
  function showContent(elt, content) {
    elt.innerHTML = "<p class='alert alert-success'>loaded !<br/>" +
      "Content = " + content + "</p>";
  }


	// let reader = new FileReader();
	// reader.onload = function(e){
	// 	if(reader.result) {
	// 		reader.content = reader.result;
	// 		console.log(reader.content)
	// 	}
	// }
	// reader.readAsText('./bin/on.BIN');
	// $.get('http://onx6ouezf.bkt.clouddn.com/on.BIN', function(data){
	// 	if(!data){
	// 		showError(data);
	// 		return false;
	// 	}
	// 	var markup = [];
	// 	var result = data;
	// 	for (var n = 0; n < result.length; ++n) {
	// 			var aByte = result.charCodeAt(n);
	// 			var byteStr = aByte.toString(16);
	// 			if (byteStr.length < 2) {
	// 					byteStr = "0" + byteStr;
	// 			}
	// 			markup.push(byteStr);
	// 	}
	// 	console.log(markup)
	// })

	// $.get('http://onx6ouezf.bkt.clouddn.com/on.BIN', function(data){
	// 	var blob = new Blob([data]);
	// 	let reader = new FileReader();
	// 	reader.onload = function(e){
	// 		if(reader.result) {
	// 			reader.content = reader.result;
	// 			console.log(reader.content)
	// 		}
	// 		var markup = [];
	// 		var result = reader.result;
	// 		for (var n = 0; n < result.length; ++n) {
	// 				var aByte = result.charCodeAt(n);
	// 				var byteStr = aByte.toString(16);
	// 				if (byteStr.length < 2) {
	// 						byteStr = "0" + byteStr;
	// 				}
	// 				markup.push(byteStr);
	// 		}
	// 		console.log(markup)
	// 	}
	// 	reader.readAsBinaryString(blob)
	// })
	var file = File('./bin/on.BIN');
	console.log(file)

	
	
	
})


