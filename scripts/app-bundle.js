define("app",["exports"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.App=function e(){t(this,e),this.message="Hello World!"}}),define("environment",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={debug:!1,testing:!1}}),define("main",["exports","./environment","aurelia-i18n","i18next-xhr-backend"],function(e,t,n,i){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function o(e){e.use.standardConfiguration().feature("resources").plugin("aurelia-i18n",function(e){return e.i18next.use(s.default),e.setup({backend:{loadPath:"./locales/{{lng}}/{{ns}}.json"},lng:"en",attributes:["t","i18n"],fallbackLng:"en",debug:!1})}),r.default.debug&&e.use.developmentLogging(),r.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=o;var r=u(t),s=u(i)}),define("resources/index",["exports"],function(e){"use strict";function t(e){}Object.defineProperty(e,"__esModule",{value:!0}),e.configure=t}),define("text!app.html",["module"],function(e){e.exports='<template><h1 t="lives_indefinite"></h1></template>'});