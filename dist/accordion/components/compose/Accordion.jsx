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
const react_1 = __importDefault(require("react"));
const Summary_1 = __importDefault(require("../Summary"));
const Content_1 = __importDefault(require("../Content"));
const Details_1 = __importDefault(require("../Details"));
const Accordion = (_a) => {
    var { summary, children } = _a, htmlDetailsProps = __rest(_a, ["summary", "children"]);
    return (<Details_1.default {...htmlDetailsProps}>
      <Summary_1.default>{summary}</Summary_1.default>
      <Content_1.default>{children}</Content_1.default>
    </Details_1.default>);
};
exports.default = Accordion;
//# sourceMappingURL=Accordion.jsx.map