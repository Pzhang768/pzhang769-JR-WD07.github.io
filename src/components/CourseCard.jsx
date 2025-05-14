import Fab from '@mui/material/Fab';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import catEating from '../image.jpeg';

const CourseCard = ({ card }) => {
  const { title, content, price, language, duration, location } = card;
  return (
    <div className='card'>
      {title ? <h2>{title}</h2> : <h2>No title found</h2>}
      {content ? <p className='padding-bottom-40px'>{content}</p> : <p>No content found</p>}

      <div className='card-content-left'>
        {price ? <p>￥：{price}</p> : <p>No price found</p>}
        {language ? <p>语言：{language}</p> : <p>No language found</p>}
        {duration ? <p>时间：{duration}</p> : <p>No duration found</p>}
        {location ? <p>地点：{location}</p> : <p>No location found</p>}
      </div>

      <img src={catEating} alt="Image of a cat eating" className='card-image'/>
      <Fab color="info" aria-label="new" className='fab-position'>
        <FiberNewIcon fontSize="large"/>
      </Fab>
    </div>
  )
}

export default CourseCard