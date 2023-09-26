const React = require("react");
const { css } = require("@linaria/core")

const App = function() {
    return <div className={css`color: red;`}>This is error report</div>
}

export default App