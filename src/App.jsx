import './App.css'
// images
import miniChat from './assets/illustration-ai-content.webp'
import stars from './assets/illustration-five-stars.webp'
import socials from './assets/illustration-multiple-platforms.webp'
import calendar from './assets/illustration-consistent-schedule.webp'
import schedule from './assets/illustration-schedule-posts.webp'
import chart from './assets/illustration-grow-followers.webp'
import faces from './assets/illustration-audience-growth.webp'
import createPost from './assets/illustration-create-post.webp'

function App() {
  return (
    <>
      <div className='grid bg-light'>
        <div className='bg-purple-dark align-items-center text-center tablet-2-col'>
          <h1 className='text-preset-1 text-white'>Social Media <span className='text-yellow'>10x</span><span className='text-italic'> Faster</span> with AI</h1>
          <img className="img-small" src={stars} alt="5 stars in a row" />
          <p className='text-preset-4 text-white'>Over 4,000 5-star reviews</p>
        </div>
        <div className='bg-white'>
          <img src={socials} alt="example X and Twitter links" />
          <h3 className='text-preset-3'>Manage multiple accounts and platforms.</h3>
        </div>
        <div className='bg-yellow-dark no-bottom-padding'>
          <h4 className='text-preset-2'>Maintain a consistent posting schedule.</h4>
          <img className="img-pad-right" src={calendar} alt="example posting calendar" />
        </div>
        <div className='bg-purple-light text-center tablet-2-col'>
          <h3 className='text-preset-2'>Schedule to social media.</h3>
          <img src={schedule} alt="example chart of best times to post" />
          <p className='text-preset-4'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className='bg-purple-dark tablet-2-col'>
          <img src={chart} alt="example follower growth chart" />
          <h2 className='text-preset-2 text-white text-center'>Grow followers with non-stop content.</h2>
        </div>
        {/* HERE! */}
        <div className='bg-white tablet-2-col space-out'>
          <div className='faces-p'>
            <p className='text-preset-2'>{`>`}56%</p>
            <p className='text-preset-4'>faster audience growth</p>
          </div>
          <img className="img-small" src={faces} alt="3 avatar human faces" />
        </div>

        <div className='bg-yellow-light'>
          <h3 className='text-preset-2'>Create and schedule content <span className='text-italic text-purple'>quicker.</span></h3>
          <img className="img-small" src={createPost} alt="a chat with AI" />
        </div>
        <div className='bg-yellow-dark'>
          <h2 className='text-preset-2'>Write your content using AI.</h2>
          <img className="img-pad-right" src={miniChat} alt="a chat with AI" />
        </div>
      </div>
    </>
  )
}

export default App
