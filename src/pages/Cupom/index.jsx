import { Container } from './styles'

import { MdContentPaste } from "react-icons/md";

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Footer } from "../../components/Footer"

export function Cupom() {

  async function copyContent(text) {
    try {
      await navigator.clipboard.writeText(text)
      window.alert("Cupom copiado! Pressione para continuar.")

    } catch (err) {
      window.alert(`Falha ao copiar o cupom ${text}`)
    }
  }

  return (
    <Container>

      <div className="text-wrapper">
        <h1 className='slide-in-blurred-right'>Isabella Frederico</h1>
        <p className='slide-in-blurred-left'>UGC CREATOR & INCLUENCER DE BELEZA</p>
      </div>

      <div className="wrapper">
        <div className="icon-wrapper slide-in-blurred-right">
          <span className=''>CLIQUE NO <MdContentPaste /> PARA COPIAR O CUPOM</span>

        </div>

        <div className="button-wrapper slide-in-blurred-left">
          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('30#ISASALVOU');
              setTimeout(() => {
                window.open('https://www.sallve.com.br/', '_blank')
                return () => clearTimeout(timeoutId)
              }, 1000);
            }}
            text={'SALLVE r$30FF ACIMA DE r$130'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('30#ISASALVOU')
            }}
            icon={MdContentPaste}
          />

        </div>

        <div className="button-wrapper slide-in-blurred-right">
          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('SKMEUPOVO')
              setTimeout(() => {
                window.open('https://www.skelt.com.br/', '_blank');
              }
              )
            }}
            text={'SKELT 10% OFF'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('SKMEUPOVO')
            }}
            icon={MdContentPaste}
          />
        </div>

        <div className="button-wrapper slide-in-blurred-left">

          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('flp-isabellaafrederico')
              setTimeout(() => {
                window.open('https://magpapelaria.com.br/', '_blank');
              })
            }}
            text={'MAGNOLIA 10% OFF'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('flp-isabellaafrederico')
            }}
            icon={MdContentPaste}
          />
        </div>

        <div className="button-wrapper slide-in-blurred-right">
          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('POVOLINDO')
              setTimeout(() => {
                window.open('https://elindacosmeticos.com.br/', '_blank');
              })
            }}
            text={'ELINDA 12% OFF'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('POVOLINDO')
            }}
            icon={MdContentPaste}
          />
        </div>

        <div className="button-wrapper slide-in-blurred-left">
          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('AISAFREDERICO')
              setTimeout(() => {
                window.open('https://icanbeauty.com.br/', '_blank');
              })
            }}
            text={'ICAN 15% OFF'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('AISAFREDERICO')
            }}
            icon={MdContentPaste}
          />
        </div>

        <div className="button-wrapper slide-in-blurred-right">
          <Button
            onClick={(e) => {
              e.preventDefault();
              copyContent('ISAFREDERICO10')
              setTimeout(() => {
                window.open('https://meuollie.com.br/', '_blank');
              })
            }}
            text={'OLLIE 10% OFF'}
          />

          <ButtonText
            onClick={(e) => {
              e.preventDefault();
              copyContent('ISAFREDERICO10')
            }}
            icon={MdContentPaste}
          />
        </div>

      </div>
      <Footer />
    </Container>
  )
}