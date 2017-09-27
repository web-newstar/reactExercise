var React=require("react");
export default class BodyChild extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div>
        <p>子页面输入:<input type="text" onChange={this.props.handleChildValue}/></p>
      </div>
    )
  }
}
