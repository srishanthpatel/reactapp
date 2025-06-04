import './App.css';
import { Component } from 'react';
import {ThreeDots} from 'react-loader-spinner'

class App extends Component{

  state={list:[],isloading:true}

componentDidMount(){
  this.getitems()
}

getitems= async ()=>{
  const api="https://apitesting-qcys.onrender.com/api/items"
  const options = {
      method: 'GET',
    }
    const response = await fetch(api,options)
    if(response.ok===true){
      const data = await response.json()
      this.setState({list:data,isloading:false})
      console.log(data)
    }
    
}
  render(){
    const {list,isloading}=this.state
    return(
      <div className='main'>
        <h1>Btech Trips</h1>
        {isloading ? (<><div className='loader'>
      <ThreeDots color="#ffffff" height="50" width="80" /></div></>):(<>
        <ul className='cont'>{
          list.map((eachitem)=>((
            <li className='li'>
              <div className='cards'>
                <img src={eachitem.img} className='ims' alt={"image?"}/>
                <h3>{eachitem.name}</h3>
                <p>{eachitem.bio}</p>
              </div>
            </li>
          )))}</ul>
          <div>
          <p className='pp'>Wanna Add More ? Click And Make Api Request</p><a href="https://apitesting-qcys.onrender.com/api/items">
          <button className='btn'>Click</button></a></div></>)}
      </div>
    )
  }
}


export default App;
