import { useState } from "react";
import imgQuadrada from "../../img/quadrado.png";

export default function Conteudo() {
    let nome: string | null = "Alê";

    const [nomeState, setNomeState] = useState<string | null>("Joel");

    function alteraNome() {
        nome = prompt("Digite o novo nome : ");
        console.log("Nome digitado: ", nome);
    }

    function alteraState() {
        const nome: string | null = prompt("digite seu nome:");
        setNomeState((nomeStateAnterior) => (nomeStateAnterior = nome));
        console.log("Nome digitado: ", nomeState);
    }

    return (
        <main>
            <div>
                <p>Nome : {nome}</p>
                <button onClick={alteraNome}>Nome = {nome}</button>
            </div>

            <div>
                <p>Nome State: {nomeState}</p>
                <button onClick={alteraState}>Nome = {nomeState}</button>
            </div>

            <section>
            <h2>Conteúdo Básico</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                soluta sed vero reiciendis enim nam, aut perferendis, sit velit
                ratione placeat, distinctio eius rerum maxime id perspiciatis
                repudiandae non! Tenetur.
                </p>
            </section>

            <section>
                <h2>Exemplo de Imagens</h2>

                {/* Esta imagem tem referência externa */}
                <figure>
                    <img src="https://placehold.co/400x400/1c1c1c1/000000/png" alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>

                {/* Esta imagem tem referência interna na /src */}
                <figure>
                    <img src={imgQuadrada} alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>

                {/*Esta imagem tem referência interna na public */}
                <figure>
                    <img src="/img/quadrado.png" alt="Exemplo de Imagem" />
                    <figcaption>Bloco de Imagem 400x400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Especial</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo dolore animi quod dolor tenetur quis aliquam ullam illum, odit perferendis officia nobis commodi id? Enim magnam error autem veritatis consequuntur, exercitationem assumenda rerum quas necessitatibus est reprehenderit ab praesentium quasi libero, id possimus numquam rem voluptate doloremque debitis consequatur?</p>
            </section>
        </main>
    );
}
