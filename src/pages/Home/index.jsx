import { Container, RightWrapper, LeftWrapper } from './styles';
import { useNavigate } from 'react-router-dom';

import eye from '../../assets/eye.webp'
import art from '../../assets/art.webp'
import serum from '../../assets/serum.webp'
import stick from '../../assets/stick.webp'
import { FaTiktok, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';

export function Home() {
  const navigate = useNavigate()
  function sendEmail() {
    window.location = "mailto:Influisafrederico@gmail.com";
  }
  

  return (
    <Container>
      <LeftWrapper>
        <div className="img-wrapper first">
          <img src={eye} alt="foto com foco na maquiagem no olho" />
        </div>
        <div className="img-wrapper second">
          <img src={stick} alt="foto com foco no base stick" />
        </div>
        <div className="img-wrapper third">
          <img src={serum} alt="foto com foco no serum" />
        </div>
        <div className="img-wrapper fourth">
          <img src={art} alt="foto com foco na maquiagem arti stica" />
        </div>

      </LeftWrapper>

      <RightWrapper>

        <div className="text-wrapper tracking-in-expand">
          <h1 >ISABELLA FREDERICO</h1>
          <p >UGC CREATOR <br /> & <br /> INFLUENCER DE BELEZA</p>
        </div>

        <div className='button-wrapper'>
          <div className="icon-wrapper slide-in-right-icon">
            <ButtonText link='https://www.tiktok.com/@isabellaafrederico' icon={FaTiktok}  />
            <ButtonText link='https://www.instagram.com/isabellaafrederico/' icon={FaInstagram}  />
          </div>

          <Button 
          onClick={() => navigate('cupom')}
          className='slide-in-right-button' 
          text={'MEUS CUPONS'} 
          />

          <Button className='slide-in-right-button' text={'FALE COMIGO'} onClick={sendEmail} />

          <div className="icon-wrapper slide-in-right-icon">
            <ButtonText link='https://br.pinterest.com/isabellaafrederico/' icon={FaPinterest}  />
            <ButtonText link='https://www.youtube.com/@Isabellaafrederico' icon={FaYoutube}  />
          </div>
        </div>
      </RightWrapper>
      <Footer />
    </Container>
  )
}
