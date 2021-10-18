import React from 'react'
import Inputis from './UI/Input/Myinput'
import Selectis from './UI/Select/Selectis'


const Postfilter = ({filter, setFilter}) => {
return (
  
    <div>
        <Inputis
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск'
        type='text' />
      <Selectis
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />

    </div>
)

}
export default Postfilter