const html = require('choo/html')
const Checkbox = require('../components/checkbox')

require('../node_modules/material-design-lite/material.min.js')
require('../node_modules/material-design-lite/material.min.css')
// require('../styles.css')

const test = (state, prev, send) => {

  const loadMDL = (e) => {
    // This doesn't work, so we are using `componentHandler` within our 'checkbox' component:
    // componentHandler.upgradeDom()
    // setTimeout(() => {componentHandler.upgradeDom()}, 1000)
  }

  return html`
    <div class="mdl-layout mdl-js-layout">

      <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
      <header class="mdl-layout__header mdl-layout__header--waterfall">
      </header>
      <main class="mdl-layout__content" onload=${loadMDL}>
        ${Checkbox({testList: state.testList}, send)}
      </main>
    </div>
  `
}

module.exports = test
