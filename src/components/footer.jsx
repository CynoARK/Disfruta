import React from 'react'
import WhatsAppLink from './contactos'
function Final_2() {
  return (
    <footer>
       <div className='main-footer'>
            <div className='container'>
                <div className='row1'>

                    
                    <div className='col'>
                        <h2>DISFRUTA INC.</h2>
                        <ul className='list-unstyled'>
                            <li>¿Quienes somos?</li>
                            <p>Desde 1987 distribuyendo.</p>
                        </ul>
                    </div>

                    <div className='col'>
                        <h2>PRODUCTOS</h2>
                        <ul className='list-unstyled'>
                            <li>Jugos Naturales</li>
                            <li>Frutas</li>
                            <li>Zumos</li>
                        </ul>
                    </div>


                    <div className='col'>
                        <h2>CONTACTANOS</h2>
                        <ul className='list-unstyled'>
                            <li>313-239-1214</li>
                            <li>Bogota-DC</li>
                            <li>Calle 125 CC Santa Barbara</li>
                            <li>disfruta@gmail.com</li>
                            
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li className='contacimg'><WhatsAppLink/></li>
                        </ul>
                    </div>
                </div>
                <hr />
                
            </div>
        </div>
    </footer>
    
  )
}

export default Final_2 ;