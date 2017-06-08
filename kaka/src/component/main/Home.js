import React from 'react';
import img1 from '../../images/首页/u584.jpg'
import img2 from '../../images/首页/u586.jpg'
import img3 from '../../images/首页/u588.jpg'

import img4 from '../../images/任务详情/u110.svg'
import img5 from '../../images/发现/u277.svg'
import img6 from '../../images/首页/u602.svg'
import img7 from '../../images/任务详情/u118.svg'

import img8 from '../../images/首页/u647.jpg'
import img9 from '../../images/首页/u649.jpg'
import img10 from '../../images/首页/u651.jpg'
import img11 from '../../images/发现/u298.svg'
import img12 from '../../images/发现/u302.svg'
import img13 from '../../images/发现/u304.svg'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd';
class Home extends React.Component{
  constructor(){
    super()
    this.state={
      data1:[
        {
          title:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况',
          head:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1380084653,2448555822&fm=23&gp=0.jpg',
          name:'chenxx',
          sex:'boy',
          money:50,
          place:'浦东新区 988km 2017-03-09'
        },
        {
          title:'我想知道这个星巴克现在的客..',
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2767012140,2687129077&fm=23&gp=0.jpg',
          head:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=882642063,4115591772&fm=23&gp=0.jpg',
          name:'an然',
          sex:'girl',
          money:50,
          place:'合肥市包河区 917km 2017-03-09'
        },
        {
          title:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况',
          head:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1380084653,2448555822&fm=23&gp=0.jpg',
          name:'chenxx',
          sex:'boy',
          money:50,
          place:'上海浦东新区 988km 2017-03-09'
        },
        {
          title:'我想知道这个星巴克现在的客..',
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2767012140,2687129077&fm=23&gp=0.jpg',
          head:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=882642063,4115591772&fm=23&gp=0.jpg',
          name:'an然',
          sex:'girl',
          money:50,
          place:'合肥市包河区 917km 2017-03-09'
        }
      ]
    }
  }
  render(){
    return (
      <div style={{width:'100%',height:'17rem'}}>
        <Carousel autoplay>
          <div><img alt='55' style={{display:'block',width:'31.26rem',height:'17rem'}} src={img1}/></div>
          <div><img alt='55' style={{display:'block',width:'31.26rem',height:'17rem'}} src={img2}/></div>
          <div><img alt='55' style={{display:'block',width:'31.26rem',height:'17rem'}} src={img3}/></div>
        </Carousel>
        <div className='renwu'>
          <h2>— 最新任务 —</h2>
          <div className='div1'>
            <div className='div2 clearfix' style={{width:`${this.state.data1.length*50}%`}}>
              {this.state.data1.map(
                (item,index)=>(
                    <div onClick={()=>this.props.history.push('/home/xiangqing',item)} key={index}>
                      <p style={{fontSize:'0.86rem'}}>{item.title}</p>
                      {item.photo?<img alt='55' style={{display:'block',width:'5.9rem',height:'2.84rem'}} src={item.photo}/>:''}
                      <p style={{width:'95%',lineHeight:'1.1rem',position:'absolute',bottom:'1.78rem'}}>
                        <img alt='55' style={{borderRadius:'50%',width:'1.5rem',height:'1.5rem',marginTop:'0.86rem' }} src={item.head}/>
                        <span style={{fontSize:'0.84rem',padding:'0.6rem'}}>{item.name}</span>
                        <img alt='55' style={{width:'0.44rem'}} src={item.sex==='boy'?img4:img5}/>
                        <img alt='55' style={{width:'1.66rem',position:'absolute',right:'2.3rem',bottom:'0.5rem'}} src={img6}/>
                        <span style={{ textAlign:'right',position:'absolute',right:'0.3rem',bottom:'0.6rem',color:'red'}}>{item.money}</span>
                      </p>
                      <p style={{width:'95%',position:'absolute',bottom:'0.6rem',textAlign:'right',color:'#ccc',fontSize:'0.6rem',height:'1rem'}}>
                        <img style={{width:'0.6rem'}} alt='55' src={img7}/>{item.place}</p>
                    </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className='tuijian'>
          <h2>— 今日推荐 —</h2>
          <div>
            <div className='div1' >
              <img alt='56' src={img8}/>
              <img alt='56' src={img9}/>
              <img alt='56' src={img10}/>
            </div>
            <p style={{fontSize:'0.8rem',paddingLeft:'1.28rem',lineHeight:'2.16rem',color:'#ccc'}}>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p>
            <p style={{fintSize:'0.6rem',color:'#ccc',paddingLeft:'1.28rem'}}>古根海娒美术馆</p>
            <p style={{fontSize:'0.5rem',paddingLeft:'1.28rem'}}>
              <img alt='55' style={{width:'2.07rem'}} src={img11}/>&nbsp;&nbsp;&nbsp;<span>6326</span>&nbsp;&nbsp;&nbsp;
              <img alt='55' style={{width:'1.32rem'}} src={img12}/>&nbsp;&nbsp;&nbsp;<span>70</span>&nbsp;&nbsp;&nbsp;
              <img alt='55' style={{width:'1.32rem'}} src={img13}/>&nbsp;&nbsp;&nbsp;<span>261</span>&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>

      </div>
    )
  }
}
export default Home
