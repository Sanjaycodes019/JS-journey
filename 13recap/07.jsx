// use of classComponent in react
class Welcome extends React.Component {
    constructor(props) {
       super(props);
       this.state = { count: 0 };
    }
 
    increment = () => {
       this.setState({ count: this.state.count + 1 });
    };
 
    render() {
       return (
          <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={this.increment}>Increment</button>
          </div>
       );
    }
 }

 
 function Welcome() {
    const [count, setCount] = React.useState(0);
 
    return (
       <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
    );
 }
 