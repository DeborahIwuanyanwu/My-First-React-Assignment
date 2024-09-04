// import Header from "./components/Header";
// import Hero from "./components/Hero";
import styled from './App.module.css'

const App = () => {
  return (
    <>
    <body>
    <div className={styled.container}>
      <div className={styled.wrapper}>
        <div className={styled.Logo}>LOGO</div>
        <div className={styled.navholder}>
          <div>Pricing</div>
          <div>Product</div>
          <div>About</div>
          <div>Careers</div>
          <div>Community</div>
        </div>
        <button className={styled.button}>Get Started</button>
      </div>
    </div>

    <div className={styled.herosection}>
  <div className={styled.heroholder}>
  <div className={styled.heroleft}>
    <div className={styled.herobigtext}>
      <h3 className={styled.Melodies}>Melodies that help you stay focus</h3>
    </div>
    <div className={styled.herosmalltext}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reiciendis, praesentium cumque itaque sint ullam quas error!
      </p>
    </div>
  
    <div className={styled.herobuttonholder}>
      <div className={styled.buttonleft}>
        <div className={styled.HeroEmailAddress}>Your email address</div>
        <div className={styled.heroEmail}>somantha@email.com</div>
      </div>
  
      <div className={styled.HeroGetStartedButton}>
        <button>Get Started</button>
      </div>
    </div>
  </div>
  </div>
  </div>
   
    </body>
   



    </>
  )
}

export default App