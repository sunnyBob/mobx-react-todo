import { observable, action, computed, autorun, useStrict } from 'mobx'
import { observer }  from 'mobx-react'
useStrict(true)
class AppState {
  @observable list = []
  @action add(content) {
    this.list = [...this.list, {
      id: Math.random(),
      content: content,
      finished: false,
    }]
  }
  @action toggleState(id) {
    for(let item of this.list) {
      if(item.id == id) {
        item.finished = !item.finished
      }
    }
  }
  @action delTodo(id) {
    this.list.forEach((item, index) => {
      if(item.id == id) {
        this.list.splice(index, 1)
      }
    })
  }
}
const store = new AppState()
autorun((e) => {
  console.log(store.list.length);
});
export {
  store
} 
