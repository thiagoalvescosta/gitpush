!function(){"use strict";function e(e,r,t){function n(e){return e.replace(/([.*+?^=!:()|\[\]\/\\])/g,"\\$1")}function o(e,r,t){return e.replace(new RegExp(n(r),"g"),t)}function a(e){function t(){if(p<n.length){var l=n[p++];$.get("plugins/cronapp-framework-js/components/reports/"+l.type+".parameter.html").done(function(e){a.push(o(e,"_field_",l.name)),t()})}else a.length>0&&r.open({templateUrl:"plugins/cronapp-framework-js/components/reports/reports.parameters.html",controller:"ParameterController",resolve:{report:function(){return JSON.parse(JSON.stringify(e))},htmlParameters:function(){return JSON.parse(JSON.stringify(a))}}})}var n=e.parameters,a=[],p=0;t()}e.getReport=function(e){t.getReport(e).then(function(e){e&&e.data&&a(JSON.parse(JSON.stringify(e.data)))})}}angular.module("custom.controllers").controller("ReportController",e),e.$inject=["$scope","$modal","ReportService"]}();