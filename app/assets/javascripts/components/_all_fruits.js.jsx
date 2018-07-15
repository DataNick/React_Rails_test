const AllFruits = (props) => {
  let fruits = props.fruits.map((fruit) => {
        return(
          <li key={fruit.id}>
            <Fruit fruit={fruit} handleDelete={props.handleDelete}/>
          </li>
        )
      })
     return(
          <ul>
            {fruits}
          </ul>
        )
}

// class AllFruits extends React.Component {

//   render(){
//       var fruits = this.state.fruits.map((fruit) => {
//         return(
//           <li key={fruit.id}>
//             <h1>{fruit.name}</h1>
//             <p>{fruit.description}</p>
//           </li>
//         )
//       })
//   return(
//         <ul>
//           {fruits}
//         </ul>
//       )
//     }
//   // render(){
//   //   let fruits = this.state.fruits.map((fruit) => {
//   //     return(
//   //       <div>
//   //         <h1>To do: List of all fruits</h1>
//   //         <ul>
//   //           { this.state.fruits.map((name, index) => {
//   //             return <li key={index}>{name}</li>
//   //           })}
//   //         </ul>
//   //       </div>
//   //     )
//   //   })
//   //   return(
//   //     <div>
//   //       {fruit}
//   //     </div>
//   //     )
//   // }
// }
//Modify to be stateless/presentation-only component
