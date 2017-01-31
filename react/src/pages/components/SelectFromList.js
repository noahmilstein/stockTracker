import React from 'react';
import Option from './Option';

const SelectFromList = (props) => {
  let options = props.data.map(option => {
    return (
      <Option
        key={option.id}
        id={option.id}
        abbreviation={option.abbreviation}
        expansion={option.expansion}
      />
    )
  })

  return(
    <div>
      <select value={props.fromValue} onChange={props.handleChange} name="codeList" form="exchangeForm">
        {options}
      </select>
    </div>
  )
}

export default SelectFromList;