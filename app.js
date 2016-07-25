const choo = require('choo')
const app = choo()
const dcopy = require('deep-copy')

const testView = require('./views/test')

app.model({
  state: {
  testList: [{ "name": "test1Name" }, {"name": "test2Name"}, {"name": "test3Name"}]
  },
  reducers: {
    selectCheckbox: (itemName, state) => {
      // Remove the selected indicator from our selectable indicators
      // and add it to our list of selected indicators:
      const selectedItem =
              state.testList.find(item => item.name === itemName)
      selectedItem['checked'] = !selectedItem['checked']
      console.log("selectCheckbox.item:", selectedItem)
      return
    }
  }
})

app.router((route) => [
  route('/', testView)
])

const tree = app.start()
document.body.appendChild(tree)
