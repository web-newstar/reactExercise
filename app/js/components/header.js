var React=require("react");
var ReactDOM=require("react-dom");
import {Input} from "antd";
import { Button } from 'antd';
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state={
      miniHeader:false /*默认加载的时候不是mini*/
    }
  }
  switchHeader(){
    this.setState({miniHeader:!this.state.miniHeader})
  }
  render(){
    const styleComponentHeader={
      header:{
        backgroundColor:"#333333",
        color:"#fff",
        paddingTop:this.state.miniHeader?"3px":"15px",
        paddingBottom:this.state.miniHeader?"3px":"15px",
        cursor:"pointer"
      },
      // 还可以定义一些其他的样式
    }
    return (
      <header style={styleComponentHeader.header} class="smallFontSize"
      onClick={this.switchHeader.bind(this)}>
        <h1>这是头部</h1>
        <Button type="danger">Danger</Button>
      </header>
    )
  }
}
