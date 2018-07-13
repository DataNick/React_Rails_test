class AllFruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/fruits')
      .then((response) => { return response.json() })
      .then((data) => {this.setState({ fruits: data }) });
  }

  render(){
      var fruits = this.state.fruits.map((fruit) => {
        return(
          <li key={fruit.id}>
            <h1>{fruit.name}</h1>
            <p>{fruit.description}</p>
          </li>
        )
      })
  return(
        <ul>
          {fruits}
        </ul>
      )
    }
  // render(){
  //   let fruits = this.state.fruits.map((fruit) => {
  //     return(
  //       <div>
  //         <h1>To do: List of all fruits</h1>
  //         <ul>
  //           { this.state.fruits.map((name, index) => {
  //             return <li key={index}>{name}</li>
  //           })}
  //         </ul>
  //       </div>
  //     )
  //   })
  //   return(
  //     <div>
  //       {fruit}
  //     </div>
  //     )
  // }
}

