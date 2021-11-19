// import React, { Component } from 'react';
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//           count : 0
//         }
//     }
//     componentDidMount(){
//       console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//       console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//     }
//     addNumber() {
//       this.setState({
//         count: this.state.count + 1
//       })
//     }
//     render() { 
//         return ( 
//             <div>
//               <h2>{this.state.count}</h2>
//               <button onClick={this.addNumber.bind(this)}>增加</button>
//             </div>
//         );
//     }
// }
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
function Index() {
  useEffect(()=>{
        console.log('useEffect=>老弟，你来了！Index页面')
        return () => {
          console.log('Index页面拜拜');
        }
  })
  return <h2>JSPang.com</h2>;
}

function List() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了！List页面')
    return () => {
      console.log('List页面拜拜');  
    }
})
  return <h2>List-Page</h2>;
}
function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log('count拜了个拜');
    }
  }, [count])
//   useEffect(()=>{
//     console.log(`useEffect=>You clicked ${count} times`)
// })
  return (
    <div>
      <h2>{count}</h2>
      <h2>年龄:{age}</h2>
      <button onClick={() => { setCount(count + 1) }}>增加数字</button>
      <button onClick={() => { setAge(age + 1) }}>增加年龄</button>

      <Router>
        <ul>
          <li> <Link to="/">首页</Link> </li>
          <li><Link to="/list/">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}

export default Example;