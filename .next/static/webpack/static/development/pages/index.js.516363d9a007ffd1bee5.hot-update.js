webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Dock.js":
/*!********************************!*\
  !*** ./src/components/Dock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/websites/Documents/OEA-Next/src/components/Dock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // So you now we make an onClick event with first goal registering a console.log() 

const BalloonWrenchPicFilled = "/balloon-wrench-filled.svg";
const BalloonWrenchPic = "/balloon-wrench.svg";
const TwirlPicFilled = "/twirl-filled.svg";
const TwirlPic = "/twirl.svg";
const SoundPicOn = "/sound-on.svg";
const SoundPic = "/sound.svg";

class Dock extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DockClicked", () => {
      this.setState({
        dockBoolean: !this.state.dockBoolean
      });
      console.log(this.state.dockBoolean);

      if (this.state.dockBoolean) {
        console.log("true called");
        let title = document.querySelector(".oea-title");
        title.style.display = "none";
        let content = document.querySelector(".oea-content");
        content.style.display = "inline";
      } else {
        let title = document.querySelector(".oea-title");
        title.style = "inline";
        let content = document.querySelector(".oea-content");
        content.style = "none";
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "SoundOn", () => {
      console.log("SoundOn called");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "twirlContainerClicked", () => {
      console.log("twirlContainerClicked");
      this.setState({
        businessBoolean: !this.state.businessBoolean
      });

      if (this.state.businessBoolean) {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl-filled.svg";
      } else {
        let jam = document.querySelector(".twirl-svg");
        jam.src = "/twirl.svg";
      }
    });

    this.state = {
      dockBoolean: true,
      balloonBoolean: false,
      soundBoolean: false,
      businessBoolean: false
    };
  }

  buttonClicked() {}

  render() {
    return __jsx("div", {
      className: "jsx-3976930409" + " " + "dock-panel-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      onClick: this.DockClicked,
      className: "jsx-3976930409" + " " + "dock-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3976930409" + " " + "search-bar-parent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/SearchBar.png",
      alt: "-",
      className: "jsx-3976930409" + " " + "search-bar-png2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3976930409" + " " + "oea-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("h4", {
      className: "jsx-3976930409" + " " + "oea-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Omnibox Extension App")), __jsx("div", {
      className: "jsx-3976930409" + " " + "oea-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("img", {
      src: "/back.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "back-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("img", {
      src: "/forward.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "forward-button-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx("img", {
      onClick: this.DockClicked,
      src: "/hexagons.png",
      alt: "some",
      className: "jsx-3976930409" + " " + "left-hexagons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("img", {
      src: "/iris.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "iris-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), __jsx("div", {
      id: "twirl-container",
      onClick: this.twirlContainerClicked,
      className: "jsx-3976930409",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("img", {
      onClick: this.props.data,
      src: this.props.business ? TwirlPicFilled : TwirlPic,
      alt: "some",
      className: "jsx-3976930409" + " " + "twirl-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("img", {
      onClick: this.BalloonOn,
      src: this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic,
      alt: "some",
      className: "jsx-3976930409" + " " + "balloon-wrench-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("img", {
      onClick: this.NextTemplateClicked,
      src: "/down-arrow-empty.png",
      alt: "some",
      className: "jsx-3976930409" + " " + "next-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), __jsx("img", {
      src: "/up-arrow-empty.png",
      alt: "some",
      className: "jsx-3976930409" + " " + "previous-template-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx("img", {
      src: "/illuminati.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "menu-overflow-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), __jsx("img", {
      src: "/nav.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "nav-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), __jsx("img", {
      src: "/history.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "history-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx("img", {
      src: "/snake.svg",
      alt: "some",
      className: "jsx-3976930409" + " " + "snake-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx("img", {
      onClick: this.SoundOn,
      src: this.state.soundBoolean ? SoundPicOn : SoundPic,
      alt: "some",
      className: "jsx-3976930409" + " " + "sound-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx("img", {
      onClick: this.DockClicked,
      src: "/hexagons.png",
      alt: "some",
      className: "jsx-3976930409" + " " + "right-hexagons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3976930409",
      __self: this
    }, ".dock-panel-parent.jsx-3976930409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.dock-panel.jsx-3976930409{width:1507px;height:76px;font-family:Montserrat;font-size:23px;background-color:#000000;background-image:linear-gradient(0deg,#000000 0%,#414141 74%);position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:177px;color:#2FA4E7;border:black;z-index:1;border:5px green solid;}.search-bar-parent.jsx-3976930409{pointer-events:none;}.search-bar-png2.jsx-3976930409{width:1507px;top:0px;padding-bottom:158px;}.oea-title.jsx-3976930409{display:none;}.oea-text.jsx-3976930409{font-family:Montserrat;font-size:38px;bottom:4px;position:absolute;left:523px;}.oea-content.jsx-3976930409{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Montserrat;font-size:38px;left:1080px;position:relative;border:5px yellow solid;}.back-button-svg.jsx-3976930409{height:66px;width:66px;position:relative;}.forward-button-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;right:980px;}.left-hexagons.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;right:234px;}.balloon-wrench-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;right:100px;}.previous-template-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:300px;}.next-template-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:100px;}.twirl-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:200px;}.nav-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;right:20px;}.history-svg.jsx-3976930409{height:66px;width:66px;position:absolute;left:502px;}.menu-overflow-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:100px;}.snake-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:700px;}.iris-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:400px;}.sound-svg.jsx-3976930409{height:66px;width:66px;position:absolute;top:9px;left:286px;}.right-hexagons.jsx-3976930409{height:66px;width:177px;position:absolute;top:9px;left:786px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R29CLEFBSzBCLEFBTUksQUFrQk8sQUFJUCxBQU1BLEFBSVUsQUFRVixBQVVELEFBTUEsQUFRQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRQSxBQU9BLEFBUUEsQUFRQSxBQVFBLEFBT0EsWUF0R0QsQUFNQSxBQVFBLEFBU0EsQUFTQSxBQVFBLEFBUUEsQUFTQSxBQVFBLEFBT0EsQUFRQSxBQVFBLEFBUUEsQUFPQyxDQXpKQSxBQXNCTCxBQU1YLE9BVkEsQ0FLeUIsRUFTTixBQW1CRyxBQU1BLEFBUUEsQUFTQSxBQVNBLEFBUUEsQUFRQSxBQVNBLEFBUUEsQUFPQSxBQVFBLEFBUUEsQUFRQSxDQU9BLENBekpLLGFBZ0NaLEdBb0JmLEFBS1ksQUFRQSxBQVNBLEFBU0EsQUFRQSxBQVFBLEFBU0EsQUFRRSxBQU9GLEFBUUEsQUFRQSxBQVFBLENBNUhaLEFBbUlZLE1BekpPLENBZ0NHLEFBeUJOLEFBUUEsQUFTRCxBQVNELEFBUUEsQUFRQyxBQVNELEFBZUEsQUFRQyxBQVFELEFBUUMsQ0FPQSxFQXRDZixRQWhDQSxBQVFBLEFBUUEsQUFTQSxBQWVBLEFBUUEsQUFRQSxBQVFBLENBMUZBLEFBUUEsQUFTQSxBQWdGQSxFQTFKNkIsSUFnQ2QsT0F6Q0ksQUE4Q1EsSUFKM0IsVUFoQ29FLFNBcUNqRCxlQUNILFlBQ00sa0JBQ00sUUF2Q04sZ0JBd0N0QixDQWxEdUIsQ0FXTiwwRUFDTSx3QkFYM0IscUVBWStCLG1HQUNiLFVBQ0ksY0FDRCxhQUNILFVBQ2EsdUJBQzNCIiwiZmlsZSI6Ii9Vc2Vycy93ZWJzaXRlcy9Eb2N1bWVudHMvT0VBLU5leHQvc3JjL2NvbXBvbmVudHMvRG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNvdW5kIGZyb20gJ3JlYWN0LXNvdW5kJztcbi8vIFNvIHlvdSBub3cgd2UgbWFrZSBhbiBvbkNsaWNrIGV2ZW50IHdpdGggZmlyc3QgZ29hbCByZWdpc3RlcmluZyBhIGNvbnNvbGUubG9nKCkgXG5cbmNvbnN0IEJhbGxvb25XcmVuY2hQaWNGaWxsZWQgPSBcIi9iYWxsb29uLXdyZW5jaC1maWxsZWQuc3ZnXCJcbmNvbnN0IEJhbGxvb25XcmVuY2hQaWMgPSBcIi9iYWxsb29uLXdyZW5jaC5zdmdcIlxuY29uc3QgVHdpcmxQaWNGaWxsZWQgPSBcIi90d2lybC1maWxsZWQuc3ZnXCIgXG5jb25zdCBUd2lybFBpYyA9IFwiL3R3aXJsLnN2Z1wiXG5jb25zdCBTb3VuZFBpY09uID0gXCIvc291bmQtb24uc3ZnXCJcbmNvbnN0IFNvdW5kUGljID0gXCIvc291bmQuc3ZnXCJcblxuXG5cbmNsYXNzIERvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZG9ja0Jvb2xlYW46IHRydWUsXG4gICAgICAgICAgICBiYWxsb29uQm9vbGVhbjogZmFsc2UsXG4gICAgICAgICAgICBzb3VuZEJvb2xlYW46IGZhbHNlLFxuICAgICAgICAgICAgYnVzaW5lc3NCb29sZWFuOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIERvY2tDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZG9ja0Jvb2xlYW46ICF0aGlzLnN0YXRlLmRvY2tCb29sZWFuIH0gKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRvY2tCb29sZWFuKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kb2NrQm9vbGVhbikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlIGNhbGxlZFwiKVxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS10aXRsZVwiKVxuICAgICAgICB0aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9lYS1jb250ZW50XCIpXG4gICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2VhLXRpdGxlXCIpXG4gICAgICAgICAgICB0aXRsZS5zdHlsZSA9IFwiaW5saW5lXCJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vZWEtY29udGVudFwiKVxuICAgICAgICAgICAgY29udGVudC5zdHlsZSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTb3VuZE9uID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNvdW5kT24gY2FsbGVkXCIpXG4gICAgfVxuXG4gICAgLy8gbGV0IGphbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHdpcmwtc3ZnXCIpXG4gICAgLy8gaWYgKGphbS5zcmMgPT09IFwiL3R3aXJsLWZpbGxlZC5zdmdcIikge1xuICAgIC8vICAgICBqYW0uc3JjID0gXCIvdHdpcmwuc3ZnXCJcbiAgICAvLyB9IGVsc2UgaWYgKGphbS5zcmMgPT09IFwiL3R3aXJsLnN2Z1wiKSB7XG4gICAgLy8gIGphbS5zcmMgPSBcInR3aXJsLWZpbGxlZC5zdmdcIlxuICAgIC8vIH1cblxuICAgIHR3aXJsQ29udGFpbmVyQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0d2lybENvbnRhaW5lckNsaWNrZWRcIilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtidXNpbmVzc0Jvb2xlYW46ICF0aGlzLnN0YXRlLmJ1c2luZXNzQm9vbGVhbn1cbiAgICAgICAgKVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5idXNpbmVzc0Jvb2xlYW4pIHtcbiAgICAgICAgICAgIGxldCBqYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR3aXJsLXN2Z1wiKVxuICAgICAgICAgICAgamFtLnNyYyA9IFwiL3R3aXJsLWZpbGxlZC5zdmdcIiBcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgamFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50d2lybC1zdmdcIilcbiAgICAgICAgICAgIGphbS5zcmMgPSBcIi90d2lybC5zdmdcIlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NrLXBhbmVsLXBhcmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY2stcGFuZWxcIiBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhci1wYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlYXJjaC1iYXItcG5nMlwiIHNyYz1cIi9TZWFyY2hCYXIucG5nXCIgYWx0PVwiLVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2VhLXRpdGxlXCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwib2VhLXRleHRcIj5PbW5pYm94IEV4dGVuc2lvbiBBcHA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9lYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJhY2stYnV0dG9uLXN2Z1wiIHNyYz1cIi9iYWNrLnN2Z1wiICBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9yd2FyZC1idXR0b24tc3ZnXCIgc3JjPVwiL2ZvcndhcmQuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuRG9ja0NsaWNrZWR9IGNsYXNzTmFtZT1cImxlZnQtaGV4YWdvbnNcIiBzcmM9XCIvaGV4YWdvbnMucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL2lyaXMuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwidHdpcmwtY29udGFpbmVyXCIgb25DbGljaz17dGhpcy50d2lybENvbnRhaW5lckNsaWNrZWR9PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLnByb3BzLmRhdGF9IGNsYXNzTmFtZT1cInR3aXJsLXN2Z1wiIHNyYz17IHRoaXMucHJvcHMuYnVzaW5lc3MgPyBUd2lybFBpY0ZpbGxlZCA6IFR3aXJsUGljfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDxpbWcgb25DbGljaz17dGhpcy5OZXh0VGVtcGxhdGVDbGlja2VkfWNsYXNzTmFtZT1cIm5leHQtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiL2Rvd24tYXJyb3ctZW1wdHkucG5nXCIgIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aW91cy10ZW1wbGF0ZS1zdmdcIiBzcmM9XCIvdXAtYXJyb3ctZW1wdHkucG5nXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiL2lsbHVtaW5hdGkuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5hdi1zdmdcIiBzcmM9XCIvbmF2LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoaXN0b3J5LXN2Z1wiIHNyYz1cIi9oaXN0b3J5LnN2Z1wiIGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzbmFrZS1zdmdcIiBzcmM9XCIvc25ha2Uuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4gICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLlNvdW5kT24gfSBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IFNvdW5kUGljT24gOiBTb3VuZFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuICAgICAgICAgICAgPGltZyBvbkNsaWNrPXt0aGlzLkRvY2tDbGlja2VkfSBjbGFzc05hbWU9XCJyaWdodC1oZXhhZ29uc1wiIHNyYz1cIi9oZXhhZ29ucy5wbmdcIiBhbHQ9XCJzb21lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcblxuICAgICAgICAuZG9jay1wYW5lbC1wYXJlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRvY2stcGFuZWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTA3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwMDAwIDAlLCAjNDE0MTQxIDc0JSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDE3N3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMkZBNEU3O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBncmVlbiBzb2xpZDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAgICAgLnNlYXJjaC1iYXItcGFyZW50IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuc2VhcmNoLWJhci1wbmcyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwN3B4O1xuICAgICAgICAgICAgICAgIHRvcDowcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1OHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2VhLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5vZWEtdGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MjNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9lYS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHllbGxvdyBzb2xpZDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuYmFjay1idXR0b24tc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcndhcmQtYnV0dG9uLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICByaWdodDogOTgwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sZWZ0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYmFsbG9vbi13cmVuY2gtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OjEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wcmV2aW91cy10ZW1wbGF0ZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDozMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5leHQtdGVtcGxhdGUtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50d2lybC1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgICAgICAubmF2LXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICByaWdodDoyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuaGlzdG9yeS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDo1MDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1lbnUtb3ZlcmZsb3ctc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zbmFrZS1zdmcge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNzAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pcmlzLXN2ZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OjQwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc291bmQtc3ZnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI4NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0LWhleGFnb25zIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY2cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3N3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3ODZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG5cblxuXG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuICBleHBvcnQgZGVmYXVsdCBEb2NrO1xuXG5cblxuLy8gICA8aW1nIGNsYXNzTmFtZT1cImlyaXMtc3ZnXCIgc3JjPVwiL0lyaXNQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgPExpbmsgdG89eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gdGhpcy5CdXNpbmVzcyA6IHRoaXMuQ29uc3VtZXJ9PjxpbWcgY2xhc3NOYW1lPVwibGVmdC1ibGFua1wiIHNyYz1cIi4vQmFsbG9vbldyZW5jaFBpY1wiIH0gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBvbkNsaWNrPXsgdGhpcy5CYWxsb29uT24gfSBjbGFzc05hbWU9XCJiYWxsb29uLXdyZW5jaC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLmJhbGxvb25Cb29sZWFuID8gQmFsbG9vbldyZW5jaFBpY0ZpbGxlZCA6IEJhbGxvb25XcmVuY2hQaWMgfSBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlvdXMtdGVtcGxhdGUtc3ZnXCIgc3JjPVwiLi9QcmV2aW91c1RlbXBsYXRlUGljLnBuZ1wiIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPExpbmsgdG89XCIvXCI+PGltZyBjbGFzc05hbWU9XCJ0d2lybC1zdmdcIiBzcmM9eyB0aGlzLnByb3BzLmJ1c2luZXNzID8gVHdpcmxQaWNGaWxsZWQgOiBUd2lybFBpY30gYWx0PVwic29tZVwiIC8+PC9MaW5rPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuZXh0LXRlbXBsYXRlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgIGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXYtc3ZnXCIgc3JjPVwiLi9uYXYuc3ZnXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhpc3Rvcnktc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz5cbi8vICAgICAgIDxMaW5rIHRvPVwiL01lbnVPdmVyZmxvd09wZW5cIj48aW1nIGNsYXNzTmFtZT1cIm1lbnUtb3ZlcmZsb3ctc3ZnXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+XG4vLyAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNuYWtlLXN2Z1wiIHNyYz1cIi4vTmV4dFRlbXBsYXRlUGljXCIgYWx0PVwic29tZVwiIC8+XG4vLyAgICAgICA8aW1nIG9uQ2xpY2s9eyB0aGlzLlNvdW5kT24gfSBjbGFzc05hbWU9XCJzb3VuZC1zdmdcIiBzcmM9eyB0aGlzLnN0YXRlLnNvdW5kQm9vbGVhbiA/IFNvdW5kUGljT24gOiBTb3VuZFBpYyB9IGFsdD1cInNvbWVcIiAvPlxuLy8gICAgICAgPFNvdW5kIHBsYXlTdGF0dXM9e3RoaXMuc3RhdGUuc291bmRCb29sZWFuID8gdGhpcy5QbGF5aW5nIDogdGhpcy5QYXVzZWR9IGNsYXNzTmFtZT1cInNvdW5kLXN2ZzJcIiBpZD1cInNcIiB1cmw9e0JhY2tncm91bmRNdXNpY30+PC9Tb3VuZD5cbi8vICAgICAgIDxMaW5rIHRvPXsgdGhpcy5wcm9wcy5idXNpbmVzcyA/IHRoaXMuQnVzaW5lc3MgOiB0aGlzLkNvbnN1bWVyfT48aW1nIGNsYXNzTmFtZT1cInJpZ2h0LWJsYW5rXCIgc3JjPVwiLi9OZXh0VGVtcGxhdGVQaWNcIiBhbHQ9XCJzb21lXCIgLz48L0xpbms+Il19 */\n/*@ sourceURL=/Users/websites/Documents/OEA-Next/src/components/Dock.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dock); //   <img className="iris-svg" src="/IrisPic" alt="some" />
//   <Link to={ this.props.business ? this.Business : this.Consumer}><img className="left-blank" src="./BalloonWrenchPic" } alt="some" /></Link>
//       <img onClick={ this.BalloonOn } className="balloon-wrench-svg" src={ this.state.balloonBoolean ? BalloonWrenchPicFilled : BalloonWrenchPic } alt="some" />
//       <img className="previous-template-svg" src="./PreviousTemplatePic.png" alt="some" />
//       <Link to="/"><img className="twirl-svg" src={ this.props.business ? TwirlPicFilled : TwirlPic} alt="some" /></Link>
//       <img className="next-template-svg" src="./NextTemplatePic"  alt="some" />
//       <img className="nav-svg" src="./nav.svg" alt="some" />
//       <img className="history-svg" src="./NextTemplatePic" alt="some" />
//       <Link to="/MenuOverflowOpen"><img className="menu-overflow-svg" src="./NextTemplatePic" alt="some" /></Link>
//       <img className="snake-svg" src="./NextTemplatePic" alt="some" />
//       <img onClick={ this.SoundOn } className="sound-svg" src={ this.state.soundBoolean ? SoundPicOn : SoundPic } alt="some" />
//       <Sound playStatus={this.state.soundBoolean ? this.Playing : this.Paused} className="sound-svg2" id="s" url={BackgroundMusic}></Sound>
//       <Link to={ this.props.business ? this.Business : this.Consumer}><img className="right-blank" src="./NextTemplatePic" alt="some" /></Link>

/***/ })

})
//# sourceMappingURL=index.js.516363d9a007ffd1bee5.hot-update.js.map