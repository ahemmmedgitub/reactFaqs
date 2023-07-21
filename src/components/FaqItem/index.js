// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, getStatus, isTrue, clickedId} = props
  const {questionText, answerText, id} = eachFaq

  let plusOrMinus
  if (clickedId === id) {
    plusOrMinus = isTrue
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  } else {
    plusOrMinus =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  }

  let displayAlt
  if (clickedId === id) {
    displayAlt = isTrue ? 'minus' : 'plus'
  } else {
    displayAlt = 'plus'
  }
  let displayAnswer

  if (clickedId === id) {
    displayAnswer = (
      <div className="answer-container">
        <hr className="hr-line" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }

  if (isTrue === false) {
    displayAnswer = ''
  }

  const changeStatus = () => {
    getStatus(id)
  }

  return (
    <li className="list-container">
      <div className="question-plus-container">
        <h1 className="question-css">{questionText}</h1>
        <img
          src={plusOrMinus}
          alt={displayAlt}
          className="plus-minus-logo"
          onClick={changeStatus}
        />
      </div>
      {displayAnswer}
    </li>
  )
}

export default FaqItem
