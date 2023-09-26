import { getIcons } from "../tokens/icons";

const React = require("react");
const { css } = require("@linaria/core")

const App = function() {
    return <div className={css`background: black; color: red; :after { content: ""; display: block; ${getIcons("logo")}; }`}>This is error report</div>
}

export default App