import { Drawer } from 'antd'

const Setting  = (props) => {

  function handleCloseSetting() {
    props.setVisible(false)
  }

  return (
    <Drawer title="SETTING" placement="right" onClose={handleCloseSetting} open={props.visible} key="right">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default Setting;