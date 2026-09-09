import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ObservadorDeRota(){
    const location = useLocation(); //Lê o endereço e guarda como objeto em location
    //O caminho do endereço opr exemplo é o location.pathname

    //Assinatura do useEffect(efeito-callback, dependencia)
    useEffect(() => {
        // 1. Exibe a rota acessada no console:
        console.log(`Rota acessada: ${location.pathname}`);
        // 2. Altera o título da aba do navegador, não tinha paradop pra pensar nisso, mas ao trocar a rota ele nãoi muda o nome já que o titulo está lá no index da raiz.
        document.title = `Loja - ${location.pathname}`;
        // 3. Rola a visualização de volta ao topo, se ele estiver no fim da página pelo visto, trocar os componentes mantém onde ele esta
        window.scrollTo(0,0);
    }, [location]) // Dependencia que dispara o Hook se o location muda o usEffect é ativado
    return null;
}