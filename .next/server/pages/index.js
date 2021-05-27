(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/colors */ "@ant-design/colors");
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_colors__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\HarithWickramasingha\\Desktop\\EthDev\\rinkeby-faucet\\pages\\index.js";





const {
  Header,
  Footer,
  Sider,
  Content
} = antd__WEBPACK_IMPORTED_MODULE_3__.Layout;


const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Row, {
    justify: "center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
      xs: 23,
      sm: 20,
      md: 16,
      xl: 12,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("center", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
          style: {
            marginTop: "80px",
            marginBottom: "40px"
          },
          children: "Rinkeby Faucet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: 60,
          src: "https://ethereum.org/static/c48a5f760c34dfadcf05a208dab137cc/31987/eth-diamond-rainbow.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginTop: "40px",
          marginBottom: "10px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
          placeholder: "Address",
          size: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginBottom: "40px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Input, {
            style: {
              marginTop: "16px",
              marginBottom: "16px"
            },
            size: "large",
            addonAfter: "Eth",
            placeholder: "Amount (Max 0.1 Eth)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {
            loading: true,
            type: "primary",
            children: "Primary Button"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: "20px",
            marginBottom: "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {
            orientation: "left",
            children: "Transaction History"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
            size: "small",
            style: {
              marginBottom: 8
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Col, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
                level: 5,
                children: "0x7c69c2E1d619C356125cAc15fc7302C8E864f2A7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Text, {
                children: "0.01 Eth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Card, {
            size: "small",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Title, {
              level: 5,
              children: "0x231b23vhg2f131g2asd"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Typography.Text, {
              children: "0.01 Eth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home); // 0x91da2Fb60CE727C084c10874ef89fbD902883Ce0

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@ant-design/colors":
/*!*************************************!*\
  !*** external "@ant-design/colors" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/colors");;

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaW5rZWJ5LWZhdWNldC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3JpbmtlYnktZmF1Y2V0L2V4dGVybmFsIFwiQGFudC1kZXNpZ24vY29sb3JzXCIiLCJ3ZWJwYWNrOi8vcmlua2VieS1mYXVjZXQvZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL3JpbmtlYnktZmF1Y2V0L2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3JpbmtlYnktZmF1Y2V0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yaW5rZWJ5LWZhdWNldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIlNpZGVyIiwiQ29udGVudCIsIkxheW91dCIsIkhvbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQSxRQUFGO0FBQVVDLFFBQVY7QUFBa0JDLE9BQWxCO0FBQXlCQztBQUF6QixJQUFxQ0Msd0NBQTNDO0FBQ0E7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0UsOERBQUMscUNBQUQ7QUFBSyxXQUFPLEVBQUMsUUFBYjtBQUFBLDJCQUNFLDhEQUFDLHFDQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxFQUFqQztBQUFBLDhCQUNFO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBa0IsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUUsTUFBYjtBQUFxQkMsd0JBQVksRUFBRTtBQUFuQyxXQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQ0UsZUFBSyxFQUFFLEVBRFQ7QUFFRSxhQUFHLEVBQ0Q7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVlFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xELG1CQUFTLEVBQUUsTUFETjtBQUVMQyxzQkFBWSxFQUFFO0FBRlQsU0FEVDtBQUFBLGdDQU1FLDhEQUFDLHVDQUFEO0FBQU8scUJBQVcsRUFBQyxTQUFuQjtBQUE2QixjQUFJLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQVFFO0FBQUssZUFBSyxFQUFFO0FBQUVBLHdCQUFZLEVBQUU7QUFBaEIsV0FBWjtBQUFBLGtDQUNFLDhEQUFDLHVDQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUNMRCx1QkFBUyxFQUFFLE1BRE47QUFFTEMsMEJBQVksRUFBRTtBQUZULGFBRFQ7QUFLRSxnQkFBSSxFQUFDLE9BTFA7QUFNRSxzQkFBVSxFQUFDLEtBTmI7QUFPRSx1QkFBVyxFQUFDO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVVFLDhEQUFDLHdDQUFEO0FBQVEsbUJBQU8sTUFBZjtBQUFnQixnQkFBSSxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQXNCRTtBQUNFLGVBQUssRUFBRTtBQUNMRCxxQkFBUyxFQUFFLE1BRE47QUFFTEMsd0JBQVksRUFBRTtBQUZULFdBRFQ7QUFBQSxrQ0FNRSw4REFBQyx5Q0FBRDtBQUFTLHVCQUFXLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFPRSw4REFBQyxzQ0FBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFtQixpQkFBSyxFQUFFO0FBQUVBLDBCQUFZLEVBQUU7QUFBaEIsYUFBMUI7QUFBQSxtQ0FDRSw4REFBQyxxQ0FBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQWtCLHFCQUFLLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFJRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLGVBZUUsOERBQUMsc0NBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQSxvQ0FDRSw4REFBQyxrREFBRDtBQUFrQixtQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThERCxDQS9ERDs7QUFpRUEsK0RBQWVGLElBQWYsRSxDQUNBLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgRGl2aWRlcixcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBJbWFnZSxcclxuICBTcGFjZSxcclxuICBDYXJkLFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCB7IEhlYWRlciwgRm9vdGVyLCBTaWRlciwgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgeyBibHVlIH0gZnJvbSBcIkBhbnQtZGVzaWduL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgIDxDb2wgeHM9ezIzfSBzbT17MjB9IG1kPXsxNn0geGw9ezEyfT5cclxuICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGUgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjgwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgUmlua2VieSBGYXVjZXRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeS5UaXRsZT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgd2lkdGg9ezYwfVxyXG4gICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9ldGhlcmV1bS5vcmcvc3RhdGljL2M0OGE1Zjc2MGMzNGRmYWRjZjA1YTIwOGRhYjEzN2NjLzMxOTg3L2V0aC1kaWFtb25kLXJhaW5ib3cucG5nXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgc2l6ZT1cImxhcmdlXCIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYWRkb25BZnRlcj1cIkV0aFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgKE1heCAwLjEgRXRoKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZyB0eXBlPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFByaW1hcnkgQnV0dG9uXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj5UcmFuc2FjdGlvbiBIaXN0b3J5PC9EaXZpZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZCBzaXplPVwic21hbGxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDggfX0+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlIGxldmVsPXs1fT5cclxuICAgICAgICAgICAgICAgICAgMHg3YzY5YzJFMWQ2MTlDMzU2MTI1Y0FjMTVmYzczMDJDOEU4NjRmMkE3XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHkuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UZXh0PjAuMDEgRXRoPC9UeXBvZ3JhcGh5LlRleHQ+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPENhcmQgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGUgbGV2ZWw9ezV9PlxyXG4gICAgICAgICAgICAgICAgMHgyMzFiMjN2aGcyZjEzMWcyYXNkXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRpdGxlPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQ+MC4wMSBFdGg8L1R5cG9ncmFwaHkuVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbi8vIDB4OTFkYTJGYjYwQ0U3MjdDMDg0YzEwODc0ZWY4OWZiRDkwMjg4M0NlMFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9jb2xvcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9