

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Gallery = /** @class */ (function (_super) {
    __extends(Gallery, _super);
    function Gallery(props) {
        var _this = _super.call(this, props) || this;
        _this.imagesToImages = function (images) {
            for (var index in images) {
                var image = images[index];
                image.selected = false;
            }
            return images;
        };
        _this.setCurrent = function (index) {
            _this.setState({
                slideActive: false
            });
            var images = _this.state.images;
            for (var index_1 in images) {
                var image_1 = images[index_1];
                image_1.selected = false;
            }
            images[index].selected = true;
            var image = images[index];
            _this.setState({
                currentImage: image,
                images: images,
            });
            setTimeout(function () {
                _this.setState({
                    slideActive: true
                });
            }, _this.props.animationDelay === undefined ? 500 : _this.props.animationDelay);
        };
        _this.gotoNext = function () {
            console.log("next");
            _this.setState({
                currentImage: _this.state.images[_this.state.currentIndex + 1],
                currentIndex: _this.state.currentIndex + 1
            });
        };
        _this.gotoPrevious = function () {
            console.log("previous");
            _this.setState({
                currentImage: _this.state.images[_this.state.currentIndex - 1],
                currentIndex: _this.state.currentIndex - 1
            });
        };
        _this.state = {
            slideActive: true,
            currentIndex: 0,
            currentImage: _this.props.images[0],
            images: _this.imagesToImages(_this.props.images),
        };
        return _this;
    }
    // @ts-ignore
    Gallery.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (this.props.images !== prevProps.images) {
            this.setState({
                slideActive: true,
                currentIndex: 0,
                currentImage: this.props.images[0],
                images: this.imagesToImages(this.props.images),
            });
        }
    };
    Gallery.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { id: "main" },
                React.createElement("header", { id: "header" },
                    React.createElement("h1", null, this.props.galleryName),
                    React.createElement("p", null, this.props.slogan),
                    React.createElement("ul", { className: "icons" }, (this.props.socials !== undefined) &&
                        Object.entries(this.props.socials).map(function (social) {
                            return (React.createElement("li", { key: social["1"].socialNetwork.toString() + social["1"].socialHandle },
                                React.createElement("a", { rel: "external nofollow", href: "https://www." + social["1"].socialNetwork + ".com/" + social["1"].socialHandle, className: "icon brands fa-" + social["1"].socialNetwork },
                                    React.createElement("span", { className: "label" }, social["1"].socialNetwork))));
                        }))),
                React.createElement("section", { id: "thumbnails" }, this.state.images.map(function (image, index) {
                    return (React.createElement("article", { className: image.selected ? "active" : "", key: image.url.toString() + image.title, onClick: function () { _this.setCurrent(index); } },
                        React.createElement("a", { className: "thumbnail" },
                            React.createElement("img", { src: image.url.toString(), alt: "" })),
                        React.createElement("h2", null, image.title),
                        React.createElement("p", null, image.details)));
                })),
                React.createElement("footer", { id: "footer" },
                    React.createElement("ul", { className: "copyright" },
                        React.createElement("li", null,
                            "\u00A9 ",
                            this.props.owner),
                        (this.props.licenseTitle !== undefined && this.props.licenseLink !== undefined)
                            &&
                                React.createElement("li", null,
                                    "More on Licensing :",
                                    React.createElement("a", { rel: "external nofollow", href: this.props.licenseLink.toString() }, this.props.licenseTitle),
                                    ".")))),
            React.createElement("div", { id: "viewer" },
                React.createElement("div", { className: "inner" }, this.state.currentImage !== undefined ?
                    React.createElement("div", null,
                        React.createElement("div", { className: this.state.slideActive ? "slide active" : "slide" },
                            React.createElement("div", { className: "caption" },
                                React.createElement("h2", null, this.state.currentImage.title),
                                React.createElement("p", null, this.state.currentImage.details)),
                            React.createElement("div", { className: "image" },
                                React.createElement("img", { src: this.state.currentImage.url.toString(), alt: "" })))) :
                    React.createElement("div", null)))));
    };
    return Gallery;
}(React.Component));

exports.default = Gallery;
//# sourceMappingURL=index.js.map
