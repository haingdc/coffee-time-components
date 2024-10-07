"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContentLink = ({ href, children }) => {
    return (<p>
      <a href={href}>{children}</a>
    </p>);
};
exports.default = ContentLink;
//# sourceMappingURL=ContentLink.jsx.map