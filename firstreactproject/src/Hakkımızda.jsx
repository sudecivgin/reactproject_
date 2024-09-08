import React from 'react'
import './Hakkımızda.css'
import program_13 from '../../assets/tabak5.png';


const Hakkımızda = () => {
  return (
    <div className='programs'>
        
            <div className='programs-text'>
            <h1> SEASIDE SAVORIES </h1>

    <p className="header-text">~Denizden Gelen Lezzetlerin En Güzel Adresi!~</p>

   
    <img src={program_13} alt='tabak5.png' className='small-image' />



    <h2 className="who-we-are">• Biz Kimiz?</h2>
        

    <h2 className="intro-text">Seaside Savories, Ege'nin göz alıcı masmavi sularının kıyısında, 
      deniz ürünlerinin en tazesini ve en lezizini sunma misyonuyla yola çıkmış bir restorandır.
       Biz, denizin sunduğu taptaze tatları ve eşsiz lezzetleri sizlerle buluşturmak için burada, 
       özenle hazırlanmış bir atmosferde hizmet veriyoruz.</h2>


           <h2 className="gallery-header">GALERİMİZ</h2>

           </div>

            </div>
        
      

  )
}

export default Hakkımızda
