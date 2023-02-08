// import React from 'react'
// import ReactDOM from 'react-dom'
// import ModalVideo from 'react-modal-video'
// import 'node_modules/react-modal-video/scss/modal-video.scss';
// class App extends React.Component {

//   constructor () {
//     super()
//     this.state = {
//       isOpen: false
//     }
//     this.openModal = this.openModal.bind(this)
//   }

//   openModal () {
//     this.setState({isOpen: true})
//   }

//   render () {
//     return (
//       <React.Fragment>
//         <ModalVideo channel='https://www.youtube.com/' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
//         <button onClick={this.openModal}>Open</button>
//       </React.Fragment>
//     )
//   }
// }

// ReactDOM.render(
//   <App />,
//     document.getElementById('root')
// )