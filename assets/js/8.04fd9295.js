(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding","aria-hidden":"true"}},[e._v("#")]),e._v(" Coding")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("General practice when coding software programs.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Table of Contents")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#include-exclude-folder-during-search-in-atom-io"}},[e._v("Include/exclude folder during search in Atom.io")])]),a("li",[a("a",{attrs:{href:"#search-and-replace-with-regexp-in-sublime-text"}},[e._v("Search and replace with RegExp in Sublime Text")])]),a("li",[a("a",{attrs:{href:"#grunt-or-gulp-it-doesn-t-really-matter"}},[e._v("Grunt or Gulp? It doesn't really matter")])]),a("li",[a("a",{attrs:{href:"#map-ip-address-to-custom-hosts-in-macos"}},[e._v("Map IP address to custom hosts in MacOS")])])])])])])])]),e._v(" "),a("h2",{attrs:{id:"include-exclude-folder-during-search-in-atom-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-exclude-folder-during-search-in-atom-io","aria-hidden":"true"}},[e._v("#")]),e._v(" Include/exclude folder during search in Atom.io")]),e._v(" "),a("ol",[a("li",[e._v("Ctrl/Cmd + Shift + F")]),e._v(" "),a("li",[e._v("In the 'File/directory pattern' textbox:\n"),a("ul",[a("li",[e._v("To include: enter folder path, i.e. "),a("code",[e._v("src")])]),e._v(" "),a("li",[e._v("To exclude: append "),a("code",[e._v("!")]),e._v(" to the path, i.e. "),a("code",[e._v("!**/node_modules/**/*")])]),e._v(" "),a("li",[e._v("To join them for better search: use comma-separated-values "),a("code",[e._v("src, !**/node_modules/**/*")])])])])]),e._v(" "),a("h2",{attrs:{id:"search-and-replace-with-regexp-in-sublime-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-and-replace-with-regexp-in-sublime-text","aria-hidden":"true"}},[e._v("#")]),e._v(" Search and replace with RegExp in Sublime Text")]),e._v(" "),a("p",[e._v("Let's say I want to replace occurrences of "),a("code",[e._v("<number>rem")]),e._v(" in thousands of files:")]),e._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" -1rem 24rem 12rem 20rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("to be:")]),e._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("px-to-rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("-1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("px-to-rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("24"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("px-to-rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("px-to-rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("The steps should be:")]),e._v(" "),a("ol",[a("li",[e._v("Ctrl/Cmd + Shift + F")]),e._v(" "),a("li",[e._v("Toggle Regular Expression on")]),e._v(" "),a("li",[e._v("In the 'Find' textbox, enter "),a("code",[e._v("(-?)(\\w+)rem")]),e._v(" "),a("ul",[a("li",[e._v("Where it will match all negative and positive values")])])]),e._v(" "),a("li",[e._v("In the 'Replace' textbox, enter "),a("code",[e._v("px-to-rem($1$2)")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("$1")]),e._v(" is the value of the back-reference of first capture group: "),a("code",[e._v("(-?)")]),e._v(", where it can be either "),a("code",[e._v("'-'")]),e._v(" or "),a("code",[e._v("''")])]),e._v(" "),a("li",[a("code",[e._v("$2")]),e._v(" is of "),a("code",[e._v("(\\w+)")]),e._v(", where it can be "),a("code",[e._v("'1'")]),e._v(" or "),a("code",[e._v("'24'")])])])])]),e._v(" "),a("h2",{attrs:{id:"grunt-or-gulp-it-doesn-t-really-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grunt-or-gulp-it-doesn-t-really-matter","aria-hidden":"true"}},[e._v("#")]),e._v(" Grunt or Gulp? It doesn't really matter")]),e._v(" "),a("p",[e._v("Not going to explain how each differs or is better as you can read about them "),a("a",{attrs:{href:"https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://www.hongkiat.com/blog/gulp-vs-grunt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("there"),a("OutboundLink")],1),e._v(". You may have even heard of arguments "),a("a",{attrs:{href:"https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("against them altogether"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("But that's not the point")]),e._v(". The point is: you need a build tool. One that can simplify your development process. One that can help you "),a("a",{attrs:{href:"http://www.joelonsoftware.com/articles/fog0000000043.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a build in one step"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Just pick one that you or your team have experience with. Both can achieve what's been advertised and be awesome.")]),e._v(" "),a("h2",{attrs:{id:"map-ip-address-to-custom-hosts-in-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-ip-address-to-custom-hosts-in-macos","aria-hidden":"true"}},[e._v("#")]),e._v(" Map IP address to custom hosts in MacOS")]),e._v(" "),a("p",[e._v("This is useful when an application with first level subdomain, i.e. "),a("a",{attrs:{href:"https://customer1.mydomain.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://customer1.mydomain.com"),a("OutboundLink")],1),e._v(" needs to be tested locally before deployment. The right way is to modify the hosts file to allow a custom mapping of IP address.")]),e._v(" "),a("ol",[a("li",[e._v("Open terminal")]),e._v(" "),a("li",[a("code",[e._v("sudo vi /etc/hosts")])]),e._v(" "),a("li",[e._v("Add new line "),a("code",[e._v("127.0.0.1 customer1.mydomain.com")]),e._v(" "),a("ul",[a("li",[e._v("Note: port is not accepted")])])]),e._v(" "),a("li",[e._v("Save and exit")]),e._v(" "),a("li",[a("code",[e._v("sudo killall -HUP mDNSResponder")])]),e._v(" "),a("li",[e._v("Browse "),a("a",{attrs:{href:"https://customer1.mydomain.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://customer1.mydomain.com"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);