const html = require('choo/html')

module.exports =
  (opts, send) => {

    const select = (e) => {
      const input = e.target
      send('selectCheckbox', input.value)
      // debugger
      e.preventDefault()
    }

    const loadMDL = (e) => {
      // We are upgrading the entire dom here because upgrading individual
      // elements is not working.

      // So this is the only option that works:
      // componentHandler.upgradeDom()

      // but `upgradeDom()` has a number of side-effects like reseting the page's scrollbar.
      // Ideally we should only be upgrading the element itself like this:
      componentHandler.upgradeElement(e)
      // More info here: https://github.com/google/material-design-lite/issues/1071
      // And here: https://github.com/google/material-design-lite/wiki/How-the-Component-Handler-works

      // This also works, but has the same side-effects as 'upgradeDom()'
      // componentHandler.upgradeAllRegistered()
    }

    const getFinalCheckboxElement = (listItem) => {
      let checkboxElement = html`
        <input type="checkbox" id="test1" class="mdl-checkbox__input" onclick=${select} value="test1Name" onload=${loadMDL}/>
    `
      if (listItem.checked) {
        // debugger
        checkboxElement.checked = true
        return checkboxElement
      } else {
        checkboxElement.checked = false
        return checkboxElement
      }
    }

    console.log("opts.testList:", opts.testList)

    return html`
      <label class="mdl-checkbox mdl-js-checkbox" for="test1">
        ${getFinalCheckboxElement(opts.testList[0])}
        <span class="mdl-checkbox__label">test1Name</span>
      </label>
    `
  }
