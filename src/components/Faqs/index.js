// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    isTrue: false,
    clickedId: '',
  }

  toDisplayAnswer = id => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
      clickedId: id,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isTrue, clickedId} = this.state
    console.log(clickedId)

    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="faqs_heading">FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem
                eachFaq={eachFaq}
                key={eachFaq.id}
                getStatus={this.toDisplayAnswer}
                isTrue={isTrue}
                clickedId={clickedId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
