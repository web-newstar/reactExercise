var React=require("react");
var ReactDOM=require("react-dom");
import BodyChild from './BodyChild'
import MixinLog from "./mixins"
import ReactMixin from 'react-mixin';
const defaultUsername={
  username:"这是一个默认的名字"
}
export default class IndexBody extends React.Component{
  constructor(){
    super();
    this.state={
      userName:'Parry'
    }
  }
  changeUserInfo(){
    console.log(this);
    this.setState({userName:"lt"})
    // 第一种方式
    // var node=document.getElementById("submitButton");
    // console.log(ReactDOM)
    // ReactDOM.findDOMNode(node).style.color="red";
    // 第二种方法
    this.refs.submitButton.style.color='green'
    MixinLog.log()

  }
  handleChildValue(event){
    this.setState({userName:event.target.value})
  }
  render(){
    var userName='Parry';
    var input=false;
    var html='IMOOC\u0020LESSON'
    var html2='IMOOC&nbsp;LESSON';
    // comments
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>接受到的父页面属性  userid:{this.props.userid}username:{this.props.username}</p>
        {this.state.userName}
        <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
        <BodyChild {...this.props} handleChildValue={this.handleChildValue.bind(this)}/>
      </div>
    )
  }
}
console.log(React.PropTypes)
// IndexBody.propTypes={
//   username:React.PropTypes.string,
//   userid:React.PropTypes.number.isRequired
// }
IndexBody.defaultProps=defaultUsername;
ReactMixin(IndexBody.prototype,MixinLog)
