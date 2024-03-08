import styled from "styled-components";


export const Container = styled.main`
  display: grid;
  grid-template-areas: "image content"
                       "footer footer";
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#FF9AB1, #000000);
  background-repeat: no-repeat;

  .slide-in-right-icon:first-of-type {
	  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .slide-in-right-icon:last-of-type {
	  -webkit-animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .slide-in-right-button:first-of-type {
	  -webkit-animation: slide-in-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: slide-in-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  .slide-in-right-button:last-of-type {
	  -webkit-animation: slide-in-right 0.85s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: slide-in-right 0.85s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  @keyframes fadeIn {
    0% { opacity: 0;}
    100% { opacity: 1;}
  }
  @keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
  }
  @keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  }
`

export const LeftWrapper = styled.div`
  grid-area: image;
  object-fit: contain;

  @media(min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 10rem;
  }

  .img-wrapper{
    display: flex;
    padding: .4rem;
    background-color: ${({ theme }) => theme.COLORS.CLARO};
    object-fit: contain;
    animation: fadeIn 1.5s;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .first{
    position: relative;
    transform: rotate(17deg);
    z-index: 1;
    max-width: 14rem;
    left: 4rem;
    >img{
      height: 14rem;
    }

  }
  .second{
    position: relative;
    transform: rotate(-23deg);
    z-index: 2;
    max-width: 14rem;
    >img{
      height: 13rem;
    }
  }
  .third{
    position: relative;
    transform: rotate(8deg);
    z-index: 1;
    max-width: 12rem;
    bottom: 3rem;
    left: 7rem;
    >img{  
      height: 14rem;
    }
  }
  .fourth{
    position: relative;
    z-index: 2;
    transform: rotate(-30deg);
    bottom: 4rem;
    max-width: 13rem;
    >img{
      height: 14rem;
    }
    
  }
`
export const RightWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.CLARO};

  .tracking-in-expand {
	  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  h1 {
    padding: 6rem 0 0;
    font-size: 4rem;
    font-weight: 400;
    animation: fadeIn 1s;
  }

  p {
    animation: fadeIn 1s;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    align-items: center;

    > button {
      width: 100%;
      max-width: 30rem;
    }

    >.icon-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1rem 2rem;
    }
    }
`