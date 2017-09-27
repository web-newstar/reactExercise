var React=require("react");
var ReactDOM=require("react-dom");
import ComponetHeader from './components/header';
import ComponentFooter from './components/footer';
import IndexBody from './components/indexBody';
import "antd/dist/antd.css";
class Index extends React.Component{
  render(){
    var componetHeader=<ComponetHeader/>/**/
    return(
    <div>
      {componetHeader}
      <IndexBody userid={2}/>
      <ComponentFooter/>
    </div>
    )
  }
}
ReactDOM.render(
  <Index/>,
  document.getElementById("root")
)
