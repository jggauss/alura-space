import Cabecalho from "../../componentes/Cabecalho";
import styles from './PaginaInicial.module.scss'

import Menu from "componentes/Menu";
import Banner from 'componentes/Banner';
import Galeria from "componentes/Galeria";
import Rodape from "componentes/Rodape";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <Banner />
                    </div>
                    
                </section>

                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}