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
          {/* flexbox, same behavior */}
        </div>
        <div className='bg-white'>
          <img src={socials} alt="example X and Twitter links" />
          {/* 3 or 2? */}
          <h3 className='text-preset-3'>Manage multiple accounts and platforms.</h3>
          {/* gets cut off in larger versions */}
          {/* same behavior */}
        </div>
        <div className='bg-yellow-dark no-bottom-padding'>
          <h4 className='text-preset-2'>Maintain a consistent posting schedule.</h4>
          <img className="img-pad-right" src={calendar} alt="example posting calendar" />
          {/* gets cut off */}
        </div>
        <div className='bg-purple-light text-center tablet-2-col'>
          <h3 className='text-preset-2'>Schedule to social media.</h3>
          <img src={schedule} alt="example chart of best times to post" />
          <p className='text-preset-4'>Optimize post timings to publish content at the perfect time for your audience.</p>
          {/* stays same, gets cut off */}
        </div>
        <div className='bg-purple-dark tablet-2-col'>
          {/* could add extra padding, image squished in tablet*/}
          <img src={chart} alt="example follower growth chart" />
          <h2 className='text-preset-2 text-white text-center'>Grow followers with non-stop content.</h2>
          {/* switches from flex-column to flex-row in  media query */}
        </div>
        <div className='bg-white tablet-2-col space-out'>
          {/* THIS ONE IS TOO TALL! - ask for help */}
          {/* change on the parent, look at margin and other qualities how affects kids */}
          <div>
            <p className='text-preset-2'>{`>`}56%</p>
            <p className='text-preset-4'>faster audience growth</p>
          </div>
          <img className="img-small faces" src={faces} alt="3 avatar human faces" />
          {/* switches: m-flex-col, t-flex-row, space between, d-  */}
        </div>
        <div className='bg-yellow-light'>
          {/* bg light yellow, aligned left, w padding */}
          {/* second biggest text, black */}
          {/* quicker is purple and in italics */}
          <h3 className='text-preset-2'>Create and schedule content <span className='text-italic text-purple'>quicker.</span></h3>
          {/* create post image */}
          <img className="img-small" src={createPost} alt="a chat with AI" />
          {/* stays same */}
        </div>
        <div className='bg-yellow-dark'>
          {/* background dark yellow, aligned left, w padding */}
          <h2 className='text-preset-2'>Write your content using AI.</h2>
          <img className="img-pad-right" src={miniChat} alt="a chat with AI" />
          {/* stays same */}
        </div>
      </div>
    </>
  )
}

export default App
