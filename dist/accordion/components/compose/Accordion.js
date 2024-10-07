import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Summary from '../Summary';
import Content from '../Content';
import Details from '../Details';
const Accordion = ({ summary, children, ...htmlDetailsProps }) => {
    return (_jsxs(Details, { ...htmlDetailsProps, children: [_jsx(Summary, { children: summary }), _jsx(Content, { children: children })] }));
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map