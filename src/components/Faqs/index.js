// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="faqs_heading">FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
