import React from 'react'
import open from './open.png'
import favorito from './favorito.png'


export default function Card({ item, styles }) {
  return (
    <div>
      <li className={styles.galeria__card}>
        <img
          className={styles.galeria__imagem}
          src={item.imagem}
          alt={item.titulo}
        />
        <p className={styles.galeria__descricao}>{item.titulo}</p>
        <div>
          
          <p>{item.creditos}</p>
          <span>
            <img src={favorito} alt="Icone do coração de curtir" />
            <img src={open} alt="Icone de abrir modal" />
          </span>
        </div>
      </li>
    </div>
  )
}
