let initialState = {
  username: "",
  navmenus: null,
}


const username = (state: any, action: any) => {
  
}

const navMenus = (state: any, action: any) => {
  console.log('redux -- navMenus');
  console.log(state, action);
  state.navmenus = action.navmenus;
  console.log('redux -- 数据存储成功', initialState);
}

const reducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case "USERNAME": 
      username(state, action);
      break;
    case "NAVMENUS":
      navMenus(state, action);
      break;
  }
}

export default reducer;