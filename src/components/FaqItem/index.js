// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: false}

  clickOnPluse = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText, id} = eachFaq
    const {isClicked} = this.state

    const displayImg = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClicked ? 'minus' : 'plus'
    console.log(altText)

    return (
      <li className="list-container">
        <div className="question-plus-container">
          <h1 className="question-css">{questionText}</h1>
          <img
            src={displayImg}
            alt={altText}
            className="plus-minus-logo"
            onClick={this.clickOnPluse}
          />
        </div>
        {isClicked && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
