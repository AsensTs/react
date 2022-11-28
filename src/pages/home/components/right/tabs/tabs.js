import { Tabs } from 'antd';

function callback(key) {
  console.log(key);
}

const items = [
  { label: 'Tab 1', key: '1',  }, 
  { label: 'Tab 2', key: '2', },
];

const TabsContainer = (props) => (
  <Tabs defaultActiveKey="1" onChange={callback} items={items}></Tabs>
);

export default TabsContainer

