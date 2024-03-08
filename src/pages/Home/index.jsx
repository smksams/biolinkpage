import { Container, RightWrapper, LeftWrapper } from './styles';

import eye from '../../assets/eye.jpg'
import art from '../../assets/art.jpg'
import serum from '../../assets/serum.jpg'
import stick from '../../assets/stick.jpg'
import { FaTiktok, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Footer } from '../../components/Footer';

export function Home() {
  
  function sendEmail() {
    window.location = "mailto:Influisafrederico@gmail.com";
}
  return (
    <Container>
      <LeftWrapper>
        <div className="img-wrapper first">
          <img src={eye} alt="" />
        </div>
        <div className="img-wrapper second">
          <img src={stick} alt="" />
        </div>
        <div className="img-wrapper third">
          <img src={serum} alt="" />
        </div>
        <div className="img-wrapper fourth">
          <img src={art} alt="" />
        </div>

      </LeftWrapper>

      <RightWrapper>

        <div className="text-wrapper tracking-in-expand">
          <h1 >ISABELLA <br /> FREDERICO</h1>
          <p >UGC CREATOR <br /> & <br /> INFLUENCER DE BELEZA</p>
        </div>

        <div className='button-wrapper'>
          <div className="icon-wrapper slide-in-right-icon">
            <ButtonText link='https://www.tiktok.com/@isabellaafrederico' icon={FaTiktok} iconSize={20} />
            <ButtonText link='https://www.instagram.com/isabellaafrederico/' icon={FaInstagram} iconSize={20} />
          </div>

          <Button className='slide-in-right-button' text={'MEUS CUPONS'} />
          <Button className='slide-in-right-button' text={'FALE COMIGO'} onClick={sendEmail} />

          <div className="icon-wrapper slide-in-right-icon">
            <ButtonText link='https://br.pinterest.com/isabellaafrederico/' icon={FaPinterest} iconSize={20} />
            <ButtonText link='https://www.youtube.com/@Isabellaafrederico' icon={FaYoutube} iconSize={20} />
          </div>
        </div>
      </RightWrapper>
      <Footer />
    </Container>
  )
}
