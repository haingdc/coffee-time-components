"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ContentLink = ({ href, children }) => {
    return ((0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("a", { href: href, children: children }) }));
};
exports.default = ContentLink;
//# sourceMappingURL=ContentLink.js.map