var React=require("react");
var footerCss=require("../../css/footer.css");
export default class BodyIndex extends React.Component{
  render(){
    console.log(footerCss);
    var footerCovert={
      "miniFooter": {
        "backgroundColor": "#333333",
        "color": "#fff",
        "paddingLeft": "20px",
        "paddingTop": "3px",
        "paddingBottom": "3px"
      },
      "miniFooter_h1": {
        "fontSize": "15px"
      }
    }
    return (
        <footer style={footerCovert.miniFooter}>
          <h1 style={footerCovert.miniFooter_h1}>这里是页脚,一般放置版权的一些信息a</h1>
        </footer>
    )
  }
}
