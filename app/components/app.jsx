import React from "react";
import { getIcons } from "../tokens/icons";

import { css } from "@linaria/core"

const App = function() {
    return <div className={css`background: black; color: red; :after { content: ""; display: block; ${getIcons("logo")}; }`}>This is error report</div>
}

export default App