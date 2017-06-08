import React from 'react';
import img1 from '../../images/下箭头/u371.png'
class Fenxiang extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div style={{width:'100%',flexGrow:'1',background:'#ccc'}}>
        <img style={{width:'100%',margin:'auto',bottom:'0',top:'0',position:'absolute'}} src={img1}/>
      </div>
    )
  }
}
export default Fenxiang
