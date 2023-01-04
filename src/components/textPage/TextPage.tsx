import { textData } from '../../data/textData'

import './TextPage.css'

export const TextPage = () => {
  const content = textData.map((text, index) => {
    //use index as key because data is static and for simplify
    return (
      <p key={index} className='text-item'>
        {text}
      </p>
    )
  })

  return <section className='text-page'>{content}</section>
}
