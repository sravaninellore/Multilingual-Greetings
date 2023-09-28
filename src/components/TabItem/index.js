import {LanguageButton, Tab} from './styledComponents'

const TabItem = props => {
  const {tabItemDetails, isActive, changeLanguage} = props
  const {buttonText, id} = tabItemDetails

  const onClickLanguage = () => changeLanguage(id)

  return (
    <Tab>
      <LanguageButton
        type="button"
        isActive={isActive}
        onClick={onClickLanguage}
      >
        {buttonText}
      </LanguageButton>
    </Tab>
  )
}

export default TabItem
