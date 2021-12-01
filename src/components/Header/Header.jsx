import './header.styles.css'
import LogoImage from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img 
          src={LogoImage} 
          alt='logotipo com ilustração de avião de papel' 
        />
      </div>
    </header>
  )
}

export default Header