webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Consumer.js":
/*!************************************!*\
  !*** ./src/components/Consumer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Consumer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Dock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dock */ "./src/components/Dock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tree-button/tree-button */ "./src/shared/tree-button/tree-button.js");
/* harmony import */ var _shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/medical-info-button/medical-info-button */ "./src/shared/medical-info-button/medical-info-button.js");
/* harmony import */ var _shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/doctors-button/doctors-button */ "./src/shared/doctors-button/doctors-button.js");
/* harmony import */ var _shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/lawyers-button/lawyers-button */ "./src/shared/lawyers-button/lawyers-button.js");
/* harmony import */ var _shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/legal-info-button/legal-info-button */ "./src/shared/legal-info-button/legal-info-button.js");
/* harmony import */ var _shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/reviews-button/reviews-button */ "./src/shared/reviews-button/reviews-button.js");
/* harmony import */ var _shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/news-button/news-button */ "./src/shared/news-button/news-button.js");
/* harmony import */ var _shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/investments-button/investments-button */ "./src/shared/investments-button/investments-button.js");
/* harmony import */ var _shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/dashboard-button/dashboard-button */ "./src/shared/dashboard-button/dashboard-button.js");
/* harmony import */ var _shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/products-buttons/products-buttons */ "./src/shared/products-buttons/products-buttons.js");
/* harmony import */ var _shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/messaging-buttons/messaging-buttons */ "./src/shared/messaging-buttons/messaging-buttons.js");
/* harmony import */ var _shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/consumer-financials-buttons/consumer-financials-buttons */ "./src/shared/consumer-financials-buttons/consumer-financials-buttons.js");
/* harmony import */ var _shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/remaining-buttons/remaining-buttons */ "./src/shared/remaining-buttons/remaining-buttons.js");

var _jsxFileName = "/Users/websites/Documents/OEA/src/components/Consumer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
















 // So you want it to conditionally render the consumer or business component contingent on whether business is true
// Same with the dock

let consumer = "/Consumer.png";
let business = "/Business.png";
class Consumer extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {
  componentDidMount() {
    document.addEventListener("mouseover", function () {
      let newsButton = document.querySelector(".news-button-container");
    });
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      soundBoolean: false,
      balloonBoolean: false,
      panelOpen: false,
      businessBoolean: false,
      menuBoolean: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlFunction", () => {
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });
      console.log("parent businessBoolean State changed");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "soundFunction", () => {
      this.setState({
        soundBoolean: !this.state.soundBoolean
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "menuFunction", () => {
      this.setState({
        menuBoolean: !this.state.menuBoolean
      });
      console.log("parent menuBoolean State changed");

      if (this.state.menuBoolean) {
        console.log("This menu" + this.state.menuBoolean);
        let child = document.querySelector(".image");
        child.style.display = "none";
      }
    });
  }

  businessClickedParent(value) {}

  render() {
    return __jsx("div", {
      className: "jsx-673410688" + " " + "consumer-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673410688" + " " + "consumer-child",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673410688" + " " + "consumer-image-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("img", {
      src: consumer,
      alt: "text",
      className: "jsx-673410688" + " " + "consumer-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-673410688" + " " + "consumer-image-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-673410688",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673410688" + " " + "consumer-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-673410688" + " " + "tree-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx(_shared_tree_button_tree_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })), __jsx(_shared_medical_info_button_medical_info_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), __jsx(_shared_doctors_button_doctors_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), __jsx(_shared_lawyers_button_lawyers_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(_shared_legal_info_button_legal_info_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx(_shared_reviews_button_reviews_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-673410688" + " " + "news-button-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(_shared_news_button_news_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx(_shared_investments_button_investments_button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx(_shared_dashboard_button_dashboard_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), __jsx(_shared_products_buttons_products_buttons__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx(_shared_messaging_buttons_messaging_buttons__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx(_shared_consumer_financials_buttons_consumer_financials_buttons__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-673410688" + " " + "remaining-buttons-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(_shared_remaining_buttons_remaining_buttons__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "673410688",
      __self: this
    }, ".consumer-parent.jsx-673410688{height:2048px;width:1536px;padding-top:14px;}.consumer-image.jsx-673410688{top:60px;position:relative;z-index:1;}.consumer-button-container.jsx-673410688{position:relative;top:50px;}.consumer-image-background.jsx-673410688{width:1536px;height:2048px;position:absolute;background:linear-gradient(270deg,#000000,#060830);background-size:400% 400%;-webkit-animation:AnimationName-jsx-673410688 2s ease-in-out infinite;animation:AnimationName-jsx-673410688 2s ease-in-out infinite;bottom:510px;z-index:0;left:827px;bottom:477px;}@-webkit-keyframes AnimationName-jsx-673410688{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes AnimationName-jsx-673410688{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBL3NyYy9jb21wb25lbnRzL0NvbnN1bWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHZ0IsQUFHc0IsQUFTSixBQU9RLEFBa0JKLEFBWWMsQUFDRyxBQUNELFNBdENYLElBeUJKLENBbENELElBZ0JMLFNBZlMsQUFTUCxBQU9kLEFBa0JzQixBQVVVLEFBRUUsRUFEQyxRQW5DbkMsT0FUQSxDQWtDeUQsbURBQzNCLDBCQUNzQixvSUFDbkMsYUFDSixVQUNFLFdBQ0UsYUFPakIiLCJmaWxlIjoiL1VzZXJzL3dlYnNpdGVzL0RvY3VtZW50cy9PRUEvc3JjL2NvbXBvbmVudHMvQ29uc3VtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJlZUJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvdHJlZS1idXR0b24vdHJlZS1idXR0b24nO1xuaW1wb3J0IE1lZGljYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9tZWRpY2FsLWluZm8tYnV0dG9uL21lZGljYWwtaW5mby1idXR0b24nO1xuaW1wb3J0IERvY3RvcnNCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2RvY3RvcnMtYnV0dG9uL2RvY3RvcnMtYnV0dG9uJztcbmltcG9ydCBMYXd5ZXJzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sYXd5ZXJzLWJ1dHRvbi9sYXd5ZXJzLWJ1dHRvbic7XG5pbXBvcnQgTGVnYWxJbmZvQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9sZWdhbC1pbmZvLWJ1dHRvbi9sZWdhbC1pbmZvLWJ1dHRvbidcbmltcG9ydCBSZXZpZXdzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9yZXZpZXdzLWJ1dHRvbi9yZXZpZXdzLWJ1dHRvbic7XG5pbXBvcnQgTmV3c0J1dHRvbiBmcm9tICcuLi9zaGFyZWQvbmV3cy1idXR0b24vbmV3cy1idXR0b24nO1xuaW1wb3J0IEludmVzdG1lbnRzQnV0dG9uIGZyb20gJy4uL3NoYXJlZC9pbnZlc3RtZW50cy1idXR0b24vaW52ZXN0bWVudHMtYnV0dG9uJztcbmltcG9ydCBEYXNoYm9hcmRCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2Rhc2hib2FyZC1idXR0b24vZGFzaGJvYXJkLWJ1dHRvbic7XG5pbXBvcnQgUHJvZHVjdHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9wcm9kdWN0cy1idXR0b25zL3Byb2R1Y3RzLWJ1dHRvbnMnO1xuaW1wb3J0IE1lc3NhZ2luZ0J1dHRvbnMgZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2luZy1idXR0b25zL21lc3NhZ2luZy1idXR0b25zJztcbmltcG9ydCBDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9jb25zdW1lci1maW5hbmNpYWxzLWJ1dHRvbnMvY29uc3VtZXItZmluYW5jaWFscy1idXR0b25zJztcbmltcG9ydCBSZW1haW5pbmdCdXR0b25zIGZyb20gJy4uL3NoYXJlZC9yZW1haW5pbmctYnV0dG9ucy9yZW1haW5pbmctYnV0dG9ucyc7XG5cbi8vIFNvIHlvdSB3YW50IGl0IHRvIGNvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSBjb25zdW1lciBvciBidXNpbmVzcyBjb21wb25lbnQgY29udGluZ2VudCBvbiB3aGV0aGVyIGJ1c2luZXNzIGlzIHRydWVcbi8vIFNhbWUgd2l0aCB0aGUgZG9ja1xuXG5sZXQgY29uc3VtZXIgPSBcIi9Db25zdW1lci5wbmdcIlxubGV0IGJ1c2luZXNzID0gXCIvQnVzaW5lc3MucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3VtZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbmV3c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cy1idXR0b24tY29udGFpbmVyXCIpXG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIHBhbmVsT3BlbjogZmFsc2UsXG4gICAgICAgIGJ1c2luZXNzQm9vbGVhbjogZmFsc2UsXG4gICAgICAgIG1lbnVCb29sZWFuOiBmYWxzZVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cbiAgICBidXNpbmVzc0NsaWNrZWRQYXJlbnQodmFsdWUpIHtcblxuICAgIH1cbiAgICB0d2lybEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFyZW50IGJ1c2luZXNzQm9vbGVhbiBTdGF0ZSBjaGFuZ2VkXCIpXG4gICAgfVxuXG4gICAgc291bmRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c291bmRCb29sZWFuOiAhdGhpcy5zdGF0ZS5zb3VuZEJvb2xlYW59KVxuICAgIH1cblxuICAgIG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJvb2xlYW46ICF0aGlzLnN0YXRlLm1lbnVCb29sZWFufSlcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJlbnQgbWVudUJvb2xlYW4gU3RhdGUgY2hhbmdlZFwiKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tZW51Qm9vbGVhbikgeyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBtZW51XCIgKyB0aGlzLnN0YXRlLm1lbnVCb29sZWFuKVxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZVwiKVxuICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLXBhcmVudFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItY2hpbGRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bWVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2VcIiBzcmM9eyBjb25zdW1lciB9IGFsdD1cInRleHRcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VtZXItaW1hZ2UtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdW1lci1idXR0b24tY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPE1lZGljYWxJbmZvQnV0dG9uPjwvTWVkaWNhbEluZm9CdXR0b24+XG4gICAgPERvY3RvcnNCdXR0b24+PC9Eb2N0b3JzQnV0dG9uPlxuICAgIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbiAgICA8TGVnYWxJbmZvQnV0dG9uPjwvTGVnYWxJbmZvQnV0dG9uPlxuICAgIDxSZXZpZXdzQnV0dG9uPjwvUmV2aWV3c0J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgIDxOZXdzQnV0dG9uPjwvTmV3c0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbiAgICA8RGFzaGJvYXJkQnV0dG9uPjwvRGFzaGJvYXJkQnV0dG9uPlxuICAgIDxQcm9kdWN0c0J1dHRvbnM+PC9Qcm9kdWN0c0J1dHRvbnM+XG4gICAgPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuICAgIDxDb25zdW1lckZpbmFuY2lhbHNCdXR0b25zPjwvQ29uc3VtZXJGaW5hbmNpYWxzQnV0dG9ucz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWFpbmluZy1idXR0b25zLWNvbnRhaW5lclwiPlxuICAgIDxSZW1haW5pbmdCdXR0b25zPjwvUmVtYWluaW5nQnV0dG9ucz5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcblxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2AgXG4gICAgLmNvbnN1bWVyLXBhcmVudCB7XG4gICAgICAgIGhlaWdodDoyMDQ4cHg7XG4gICAgICAgIHdpZHRoOiAxNTM2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29uc3VtZXItY2hpbGQge1xuICAgIH1cblxuICAgIC5jb25zdW1lci1pbWFnZSB7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuXG4gICAgLmNvbnN1bWVyLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgdG9wOjUwcHg7XG4gICAgfVxuXG4gICAgLnRyZWUtYnV0dG9uLWNvbnRhaW5lciB7fVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgfVxuXG4gICAgLm5ld3MtYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgfVxuXG5cbiAgICAuY29uc3VtZXItaW1hZ2UtY29udGFpbmVyIHtcblxuICAgIH1cblxuICAgIC5jb25zdW1lci1pbWFnZS1iYWNrZ3JvdW5kIHtcbiAgICAgICAgd2lkdGg6IDE1MzZweDtcbiAgICAgICAgaGVpZ2h0OiAyMDQ4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwMDAwMCwgIzA2MDgzMCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIGJvdHRvbTogNTEwcHg7XG4gICAgICAgIHotaW5kZXg6MDtcbiAgICAgICAgbGVmdDogODI3cHg7XG4gICAgICAgIGJvdHRvbTogNDc3cHg7XG5cbiAgICBAa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xuICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgNTAle2JhY2tncm91bmQtcG9zaXRpb246MTAwJSA1MCV9XG4gICAgICAgIDEwMCV7YmFja2dyb3VuZC1wb3NpdGlvbjowJSA1MCV9XG59XG4gICAgfVxuXG5cbiAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkNvbnN1bWVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIGJwaTogZGF0YS5icGlcbiAgfTtcbn1cbi8vICMwMjAzMTNcbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cbi8vIDx2aWRlbyBwcmVsb2FkPVwiYXV0b1wiIGF1dG9QbGF5IGxvb3AgY2xhc3NOYW1lPVwiZnVsbHNjcmVlbi12aWRlb1wiIHdpZHRoPVwiMTUzNlwiIGhlaWdodD1cIjIwNDhcIj5cbi8vIDxzb3VyY2Ugc3JjPVwiL1RyZWUubXA0XCIgXG4vLyAgICAgdHlwZT1cInZpZGVvL21wNFwiPjwvc291cmNlPlxuLy8gICA8L3ZpZGVvPlxuXG4vLyBjb21wb25lbnREaWRNb3VudCgpIHtcbi8vICAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGxzY3JlZW4tdmlkZW9cIilcbi8vICAgICBjb25zb2xlLmxvZyh2aWQpXG4vLyAgICAgdmlkLnBsYXkoKVxuLy8gfVxuXG4vLyA8VHJlZUJ1dHRvbj48L1RyZWVCdXR0b24+XG4vLyA8TWVkaWNhbEluZm9CdXR0b24+PC9NZWRpY2FsSW5mb0J1dHRvbj5cbi8vIDxEb2N0b3JzQnV0dG9uPjwvRG9jdG9yc0J1dHRvbj5cbi8vIDxMYXd5ZXJzQnV0dG9uPjwvTGF3eWVyc0J1dHRvbj5cbi8vIDxMZWdhbEluZm9CdXR0b24+PC9MZWdhbEluZm9CdXR0b24+XG4vLyA8UmV2aWV3c0J1dHRvbj48L1Jldmlld3NCdXR0b24+XG4vLyA8TmV3c0J1dHRvbj48L05ld3NCdXR0b24+XG4vLyA8SW52ZXN0bWVudHNCdXR0b24+PC9JbnZlc3RtZW50c0J1dHRvbj5cbi8vIDxEYXNoYm9hcmRCdXR0b24+PC9EYXNoYm9hcmRCdXR0b24+XG4vLyA8UHJvZHVjdHNCdXR0b25zPjwvUHJvZHVjdHNCdXR0b25zPlxuLy8gPE1lc3NhZ2luZ0J1dHRvbnM+PC9NZXNzYWdpbmdCdXR0b25zPlxuLy8gPENvbnN1bWVyRmluYW5jaWFsc0J1dHRvbnM+PC9Db25zdW1lckZpbmFuY2lhbHNCdXR0b25zPlxuLy8gPFJlbWFpbmluZ0J1dHRvbnM+PC9SZW1haW5pbmdCdXR0b25zPlxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */\n/*@ sourceURL=/Users/websites/Documents/OEA/src/components/Consumer.js */"));
  }

}

Consumer.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}; // #020313
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>
// <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
// <source src="/Tree.mp4" 
//     type="video/mp4"></source>
//   </video>
// componentDidMount() {
//     const vid = document.querySelector(".fullscreen-video")
//     console.log(vid)
//     vid.play()
// }
// <TreeButton></TreeButton>
// <MedicalInfoButton></MedicalInfoButton>
// <DoctorsButton></DoctorsButton>
// <LawyersButton></LawyersButton>
// <LegalInfoButton></LegalInfoButton>
// <ReviewsButton></ReviewsButton>
// <NewsButton></NewsButton>
// <InvestmentsButton></InvestmentsButton>
// <DashboardButton></DashboardButton>
// <ProductsButtons></ProductsButtons>
// <MessagingButtons></MessagingButtons>
// <ConsumerFinancialsButtons></ConsumerFinancialsButtons>
// <RemainingButtons></RemainingButtons>

/***/ })

})
//# sourceMappingURL=index.js.f5782bf0fdb14279993a.hot-update.js.map