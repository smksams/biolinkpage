import styled from "styled-components";


export const Container = styled.main`
  display: grid;
  grid-template-areas: 
  "image content"
  "footer footer";
  
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#FF9AB1, #000000);

  @media (max-width: 330px) {
    display: flex;
    flex-direction: column;

  }

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
    20% { opacity:0;}
    40%  { opacity:0;}
    100% { opacity: 1;}
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
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  height: 90vh;

  @media(max-width: 330px) {
    display: none;
  }

  @media(min-width: 700px) {
    display: grid;
    grid-template-areas: 
    "second first"
    "fourth third";
    padding: 2rem 2rem;
    align-items: center;
    


    .first {
      grid-area: first;
    }
    .second {
      grid-area: second;
    }
    .third {
      grid-area: third;
    }
    .fourth {
      grid-area: fourth;
    }

  }

  .img-wrapper{  
    padding: .4rem;
    background-color: ${({ theme }) => theme.COLORS.CLARO};
    animation: fadeIn 3s;
    }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .first{
    position: relative;
    transform: rotate(17deg);
    z-index: 1;
    width: clamp(8.75rem, 10.701vw + 6.409rem, 19.25rem);
    left: 4rem;
    height: clamp(8.75rem, 10.191vw + 6.521rem, 18.75rem);

    @media(min-width: 700px) {
      position: static;
      align-self: center;
      justify-self: center;
    }
  }
  .second{
    position: relative;
    transform: rotate(-23deg);
    z-index: 2;
    width: clamp(10.188rem, 8.153vw + 8.404rem, 18.188rem);
    height: clamp(8.75rem, 10.701vw + 6.409rem, 19.25rem);

    @media(min-width: 700px) {
      position: static;
    }
  }
  .third{
    position: relative;
    transform: rotate(8deg);
    z-index: 1;
    bottom: 3rem;
    left: 7rem;
    width: clamp(9rem, 8.599vw + 7.119rem, 17.438rem);
    height: clamp(10.063rem, 11.783vw + 7.485rem, 21.625rem);

    @media(min-width: 700px) {
      position: static;
    }
  }
  .fourth{
    position: relative;
    z-index: 2;
    transform: rotate(-30deg);
    bottom: 4rem;
    width: clamp(9.25rem, 5.287vw + 8.094rem, 14.438rem);
    height: clamp(9.813rem, 8.025vw + 8.057rem, 17.688rem);

    @media(min-width: 700px) {
      position: static;
    }    
  }
`
export const RightWrapper = styled.div`
  grid-area: content;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.CLARO};
  overflow: hidden;

  @media(min-width: 700px) {
    
    .text-wrapper {
      padding-bottom: 4rem;
    }
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: fadeIn 3s;
  }

  h1 {
    width: clamp(15rem, 30.675vw + 4.264rem, 65rem);
    padding: 6rem 0 0;
    font-size: 4rem;
    font-weight: 400;
  }

  .button-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    align-items: center;

    @media (min-width: 700px) {
      display: grid;
      grid-template-areas: 
      "Icon1 Icon2"
      "Button1 Button2 ";
      padding: 0;
      gap: 1rem;
      align-self: center;
      width: clamp(25rem, 8.197vw + 21.414rem, 31.25rem);

      :nth-child(1) {
        grid-area: Icon1;
      }

      :nth-child(4) {
        grid-area: Icon2;
      }
    }

    > button {
      width: 100%;
      min-width: 13rem;
      max-width: 20rem;
    }

    >.icon-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 20rem;
      padding: 1rem 2rem;

      a {
        font-size: clamp(2rem, 4.286vw + 0.5rem, 3.5rem);
      }
      
    }
  }
`