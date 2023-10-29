import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  InputBu,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {
    userInput: '',
    isButtonClicked: false,

    userInputs: '',
    isButtonPressed: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  onChangeInputs = event => {
    this.setState({userInputs: event.target.value})
  }

  onChangeSaves = event => {
    event.preventDefault()
  }

  onClickButtons = () => {
    this.setState(prevState => ({
      isButtonPressed: !prevState.isButtonPressed,
    }))
  }

  render() {
    const {userInput, isButtonClicked, userInputs, isButtonPressed} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'
    const buttonFont = isButtonPressed ? 'Edit' : 'Save'
    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>

          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <InputBu
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>

          <InputContainer>
            {isButtonPressed ? (
              <Paragraph>{userInputs}</Paragraph>
            ) : (
              <InputBu
                type="text"
                onChange={this.onChangeInputs}
                value={userInputs}
              />
            )}
            <Button type="button" onClick={this.onClickButtons}>
              {buttonFont}
            </Button>
          </InputContainer>
          <Heading>I noticed is nothing is difficult</Heading>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default TextInput
