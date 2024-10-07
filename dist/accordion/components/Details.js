import { jsx as _jsx } from "react/jsx-runtime";
import './accordion.css';
const Details = ({ children, ...rest }) => {
    return (_jsx("details", { ...rest, className: "accordion", children: children }));
};
export default Details;
//# sourceMappingURL=Details.js.map