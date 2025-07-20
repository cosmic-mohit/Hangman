import Level1 from './../../assets/images/1.jpg'
import Level2 from '../../assets/images/2.jpg'
import Level3 from '../../assets/images/3.jpg'
import Level4 from '../../assets/images/4.jpg'
import Level5 from '../../assets/images/5.jpg'
import Level6 from '../../assets/images/6.jpg'
import Level7 from '../../assets/images/7.jpg'
import Level8 from '../../assets/images/8.jpg'

function Hangman({ step }){

    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];

    return (
        <div className="flex justify-center items-center">
            <img 
                src={ step >= images.length ? images[images.length - 1] : images[step]} 
            />
        </div>
    )
}


export default Hangman