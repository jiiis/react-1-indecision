// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.handlePick = this.handlePick.bind(this)
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//     this.handleDeleteOption = this.handleDeleteOption.bind(this)
//     this.handleAddOption = this.handleAddOption.bind(this)
//
//     this.state = {
//       options: props.options
//     }
//   }
//
//   componentDidMount() {
//     try {
//       const json = localStorage.getItem('options')
//       const options = JSON.parse(json)
//
//       if (options) {
//         this.setState(() => ({ options }))
//       }
//     } catch (e) {}
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options)
//
//       localStorage.setItem('options', json)
//     }
//   }
//
//   handlePick() {
//     const randomIndex = Math.floor(Math.random() * this.state.options.length)
//     const option = this.state.options[randomIndex]
//
//     console.log(option)
//   }
//
//   handleDeleteOptions() {
//     this.setState(() => ({
//       options: []
//     }))
//   }
//
//   handleDeleteOption(optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => option !== optionToRemove )
//     }))
//   }
//
//   handleAddOption(option) {
//     if (!option) {
//       return 'Enter valid value to add option.'
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists.'
//     }
//
//     this.setState((prevState) => ({
//       options: prevState.options.concat(option)
//     }))
//   }
//
//   render() {
//     const title = 'Indecision'
//     const subtitle = 'Put your life in the hands of a computer.'
//
//     return (
//       <div>
//         <Header
//           title={title}
//           subtitle={subtitle}
//         />
//         <Action
//           hasOptions={this.state.options.length > 0}
//           handlePick={this.handlePick}
//         />
//         <Options
//           options={this.state.options}
//           handleDeleteOptions={this.handleDeleteOptions}
//           handleDeleteOption={this.handleDeleteOption}
//         />
//         <AddOption
//           handleAddOption={this.handleAddOption}
//         />
//       </div>
//     )
//   }
// }
//
// IndecisionApp.defaultProps = {
//   options: []
// }
//
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
//   )
// }
//
// Header.defaultProps = {
//   title: 'Default title'
// }
//
// const Action = (props) => {
//   return (
//     <div>
//       <button
//         onClick={props.handlePick}
//         disabled={!props.hasOptions}
//       >What should I do?
//       </button>
//     </div>
//   )
// }
//
// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove all</button>
//       {props.options.length === 0 && <p>Please add an option to get started.</p>}
//       {
//         props.options.map((option, index) => (
//           <Option
//             key={index}
//             text={option}
//             handleDeleteOption={props.handleDeleteOption}
//           />
//         ))
//       }
//     </div>
//   )
// }
//
// const Option = (props) => {
//   return (
//     <div>
//       {props.text}
//       <button onClick={() => {
//         props.handleDeleteOption(props.text)
//       }}>remove</button>
//     </div>
//   )
// }
//
// class AddOption extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.handleAddOption = this.handleAddOption.bind(this)
//
//     this.state = {
//       error: undefined
//     }
//   }
//
//   handleAddOption(e) {
//     e.preventDefault()
//
//     const option = e.target.elements.option.value.trim()
//     const error = this.props.handleAddOption(option)
//
//     this.setState(() => ({ error }))
//
//     if (!error) {
//       e.target.elements.option.value = ''
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.handleAddOption}>
//           <input type="text" name="option"/>
//           <button>Add option</button>
//         </form>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<IndecisionApp options={['Option 1', 'Option 2']}/>, document.getElementById('app'))
