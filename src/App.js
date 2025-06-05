import './App.css';
import { Component } from 'react';
class App extends Component{

  state={list:[]}

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
      this.setState({list:data})
      console.log(data)
    }
    
}
  render(){
    const {list}=this.state
    return(
      <div className='main'>
        <h1>Btech Trips</h1>
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
          <p className='pp'>Wanna Add More ? Click And Make Api Request</p><a href="https://apiposting.netlify.app/">
          <button className='btn'>Click</button></a></div>
      </div>
    )
  }
}


export default App;
