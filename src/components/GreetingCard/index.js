import {Image} from './styledComponents'

const GreetingCard = props => {
  const {greetingCardDetails} = props
  const {imageUrl, imageAltText} = greetingCardDetails

  return <Image src={imageUrl} alt={imageAltText} />
}

export default GreetingCard
