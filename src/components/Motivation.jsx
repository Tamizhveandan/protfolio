import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

function Motivation() {
  return (
    <div className={`${styles.sectionSubText} w-full flex justify-center`}>“If you don't believe you are the best,<br/>
     then you will never achieve all what you are capable of.” - CR7</div>
  )
}

export default SectionWrapper(Motivation,"")