import { countStore } from "@/store/mobx/index"
import { observer } from 'mobx-react-lite'

function page1() {
  return (
    <div>
      page1
      {countStore.count}
      {countStore.num}
      <button onClick={countStore.addCount}>点我+1</button>
    </div>
  )
}

export default observer(page1);