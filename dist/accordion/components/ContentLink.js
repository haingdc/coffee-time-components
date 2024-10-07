import { jsx as _jsx } from "react/jsx-runtime";
const ContentLink = ({ href, children }) => {
    return (_jsx("p", { children: _jsx("a", { href: href, children: children }) }));
};
export default ContentLink;
//# sourceMappingURL=ContentLink.js.map