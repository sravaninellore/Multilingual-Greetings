import {Component} from 'react'
import {Container, Heading, TabsContainer} from './styledComponents'
import TabItem from '../TabItem'
import GreetingCard from '../GreetingCard'

class Greetings extends Component {
  constructor(props) {
    super(props)
    const {languageGreetingsList} = this.props
    this.state = {activeTabId: languageGreetingsList[0].id}
  }

  changeLanguage = activeTabId => this.setState({activeTabId})

  render() {
    const {languageGreetingsList} = this.props
    const {activeTabId} = this.state

    const languageGreeting = languageGreetingsList.filter(
      eachGreeting => eachGreeting.id === activeTabId,
    )[0]

    return (
      <Container>
        <Heading>Multilingual Greetings</Heading>
        <TabsContainer>
          {languageGreetingsList.map(eachGreeting => (
            <TabItem
              key={eachGreeting.id}
              tabItemDetails={eachGreeting}
              isActive={eachGreeting.id === activeTabId}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </TabsContainer>

        <GreetingCard greetingCardDetails={languageGreeting} />
      </Container>
    )
  }
}

export default Greetings
