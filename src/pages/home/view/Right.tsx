import React from 'react'
import RightContent from '../components/right/index'
// import { Calendar} from 'antd';
// import locale from 'antd/lib/calendar/locale/zh_CN.js'

interface Props {
    
}
interface State {
  value: any
}

export default class Right extends React.Component<Props, State> {
  state = {
    value: "",
  }

  onPanelChange = (value: any) => {
    this.setState({ value });
  };

  render() {
    return (
      // <div className="calendar">
      //   {/* <Calendar fullscreen={false} onPanelChange={this.onPanelChange} locale={locale}/> */}
      // </div>
      <RightContent></RightContent>
    );
  }
}
