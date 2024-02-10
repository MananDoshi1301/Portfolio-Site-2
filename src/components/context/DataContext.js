import { createContext } from "react";
import about_img from "../images/LinkedIn_pic.jpeg"
import blogITVideo from '../images/blogIT.mp4';
import githubFinderVideo from '../images/githubFinder.mp4';
import newsAppVideo from '../images/newsApp.mp4';
import toyStoreVideo from '../images/toyStore.mp4';
import vlabVideo from '../images/vlab.mp4';

const data = {

  // Top react_typed string content (BannerTyped.js)
  banner_typed_strings: [
    "Hi!<br>I am <strong><u>Manan</u></strong>...", "I am a passionate<br><u>Software Developer</u>",
  ],
  // "<u>Parallel Computing</u> <u>Compilers</u> are my passion!"

  // About me content (AboutContent.js)
  about_content: <>
    <div className='about-content-div first-line'>
      Hey there!
    </div>
    <div className='about-content-div'>
      I'm Manan Doshi, a MSCS grad at CU Boulder ready to dive into the tech world. I'm all about the thrill of <span className='highlight-word'>software development</span> and <span className='highlight-word'>system optimization</span>, with a knack for systems programming like <span className='highlight-word'>parallel programming, compilers</span>, and <span className='highlight-word'>HPC</span>.
    </div>
    <div className='about-content-div'>
      <span className='highlight-word'></span>
      Lately I have been juggling with <span className='highlight-word'>React.JS, Python</span>, and <span className='highlight-word'>AWS</span> like a tech wizard. I've even danced with <span className='highlight-word'>Docker</span> and <span className='highlight-word'>Kubernetes</span> for some orchestration magic. Let's link up and geek out together! 🚀
    </div>
  </>,

  // About me image (AboutContent.js)
  about_img_link: about_img,

  // Work on carousel(WorkCarousel.js)
  projects: [

    {
      id: 2,
      title: 'BlogIT',
      type: 'Website',
      // year: '2021',
      leftColor: '#11998e',
      rightColor: '#38ef7d',
      shape: 'circle',
      link: '',
      repo: 'https://github.com/MananDoshi1301/BlogIT-Node-Express',
      video: blogITVideo,
    },
    {
      id: 3,
      title: 'Github-Finder',
      type: 'Website',
      // year: '2021',
      leftColor: '#23074d',
      rightColor: '#cc5333',
      shape: 'square',
      link: 'https://yourfinder.netlify.app/',
      repo: 'https://github.com/MananDoshi1301/Github-Finder-React',
      video: githubFinderVideo,
    },
    {
      id: 4,
      title: 'News-App',
      type: 'Website',
      // year: '2021',
      leftColor: '#f5af19',
      rightColor: '#f12711',
      shape: 'circle',
      link: '',
      repo: 'https://github.com/MananDoshi1301/News-App-React-Redux',
      video: newsAppVideo,
    },
    {
      id: 5,
      title: 'My-Toy-Store',
      type: 'Website',
      // year: '2021',
      leftColor: '#c31432',
      rightColor: '#240b36',
      shape: 'square',
      link: 'https://my-toy-store-4e5e8.web.app/',
      repo: 'https://github.com/MananDoshi1301/My-Toy-Store',
      video: toyStoreVideo,
    },
    {
      id: 6,
      title: 'Virtual-Labs',
      type: 'Website',
      // year: '2020',
      leftColor: '#8E2DE2',
      rightColor: '#4A00E0',
      shape: 'circle',
      link: '',
      repo: 'https://github.com/MananDoshi1301/VirtualLab-Canvas',
      video: vlabVideo,
    },
  ],

}

export const DataContext = createContext(data);