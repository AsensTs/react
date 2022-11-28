import { makeAutoObservable, observable } from "mobx";
class CountStore {
    count = 0;
    @observable num = 0;
    constructor() {
        // 把数据弄成响应式, 等同于 @observable
        makeAutoObservable(this); 
    }
    addCount = () => {
        this.count++;
        this.num = this.count;
        this.num++;
        console.log(this.count);
    }
}
const countStore = new CountStore();
export default countStore;