const username = (key: String, value?: any) => {
  return {
    type: "USERNAME",
    key,
    value
  }
}

const navMenus = (navmenus: object) => {
  return {
    type: "NAVMENUS",
    navmenus
  }
}


export {
  username, 
  navMenus
}