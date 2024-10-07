"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Summary_1 = __importDefault(require("../Summary"));
const Content_1 = __importDefault(require("../Content"));
const Details_1 = __importDefault(require("../Details"));
const Accordion = (_a) => {
    var { summary, children } = _a, htmlDetailsProps = __rest(_a, ["summary", "children"]);
    return ((0, jsx_runtime_1.jsxs)(Details_1.default, Object.assign({}, htmlDetailsProps, { children: [(0, jsx_runtime_1.jsx)(Summary_1.default, { children: summary }), (0, jsx_runtime_1.jsx)(Content_1.default, { children: children })] })));
};
exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map