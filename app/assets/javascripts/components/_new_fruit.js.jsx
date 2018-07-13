const NewFruit = props => {
  let formFields = {}

  return(
    <div>
      <input ref={input => formFields.name = input}
        placeholder='Enter name of fruit' />
      <input ref={input => formFields.description = input}
        placeholder='Enter description of fruit' />
      <button>Submit</button>
    </div>
    )
}