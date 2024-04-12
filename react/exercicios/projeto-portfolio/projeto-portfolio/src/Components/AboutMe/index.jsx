import './index.css'
import fotocontainer from '../../img/foto-container.png'
function AboutMe() {

  return (
    <>


      <div className='container'>
        <div className='foto-container'>
         <img src={fotocontainer} className='imagem' alt="foto"  />
        </div>
      </div>


      <div className='text-container piscante'>
          <span className='about-me'> Sou um desenvolvedor web experiente com habilidades sólidas em 
          construção de layouts responsivos e estilos visualmente atraentes. Tenho experiência em desenvolvimento 
          de interfaces de usuário dinâmicas e interativas, bem como na construção de aplicativos e 
          APIs robustas do lado do servidor. Além disso, estou familiarizado com práticas eficientes 
          de versionamento de código e colaboração em equipe. Minha experiência em manipulação de bancos de dados me permite 
          armazenar, recuperar e gerenciar dados de forma eficaz para criar experiências web poderosas e personalizadas.</span>
      </div>

      
    </>
  )
}

export default AboutMe
