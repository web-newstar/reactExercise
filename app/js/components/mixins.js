const MixinLog={
  componentDidMount(){
    console.log("这是生命周期")
  },
  log(){
    console.log("这是公用的方法")
  }
}
export default MixinLog
