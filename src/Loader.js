
import './Loading.css';
import preloaderImg from './media/download.gif';

const Loading = ()=>{
    return(
        <div className='Loading'>
            <div className='circle' style={{
            }}>
                <img 
                    src={preloaderImg}
                    alt='oiuytr'
                    className='pdldd'
                    style={{
                        background:'red',
                        position:'absolute',
                        zIndex:'999999',
                        width:'430px',
                        objectFit:'cover',
                        marginTop:'150px'

                    }}
                />
            </div>
        </div>
    )
}

export default Loading;