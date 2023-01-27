import React from 'react'
import Card from './Card/index.jsx'

export default function Cards({itens,styles}) {
  return (
    <div>
        <ul className={styles.galeria__cards}>
                {itens.map((item) => {
                    return (
                       <Card
                       key={item.id}
                       item={item}
                       styles={styles}
                       /> 
                    )
                })}
            </ul>
    </div>
  )
}
