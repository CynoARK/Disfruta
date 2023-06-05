import React from 'react';


function WhatsAppLink() {
    const phoneNumber = '3175814116'; 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('¡Hola!')}`;
    const whatsappimage ='https://cdn.icon-icons.com/icons2/617/PNG/512/social_media_logo_whatsapp_icon-icons.com_56671.png'; 
    const facebookLink = 'https://www.facebook.com/photo/?fbid=101262406323748&set=a.101262426323746&__tn__=%3C'; 
    const facebookImage = 'https://cdn.icon-icons.com/icons2/617/PNG/512/social_media_logo_facebook_icon-icons.com_56670.png';
    const githubLink = 'https://github.com/AndresGarciaT';
    const githubLogo = 'https://cdn.icon-icons.com/icons2/617/PNG/96/social_media_logo_github_icon-icons.com_56662.png';
    return (
        <div className="whatsapp-container"> {/* Agrega la clase al contenedor */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img className='contacimg' src={whatsappimage} alt="WhatsApp" />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
        <img className="contacimg" src={facebookImage} alt="Facebook" />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className="contacimg" src={githubLogo} alt="GitHub" />
      </a>
      </div>
    );
  }
  export default WhatsAppLink;