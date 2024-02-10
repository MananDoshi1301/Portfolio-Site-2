import { createContext } from "react";
import about_img from "../images/LinkedIn_pic.jpeg"

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

}

export const DataContext = createContext(data);