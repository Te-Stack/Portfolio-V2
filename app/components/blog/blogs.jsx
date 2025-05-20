// import Link from "next/link";
// import "./blog.css"
// import Image from "next/image";

// const Blogs = () => {
//     return ( 
//         <div className="blogs">
//             {/* <h1 className="text-white text-center" >Blogs</h1> */}
//             <div className="flex flex-col md:flex-row justify-evenly">
//                 <div className="blog">
//                     <Link href="https://adamtheautomator.com/github-actions-matrix/" target="_blank">
//                         <Image src="/GitHub Actions.webp" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>How to Use the GitHub Actions Matrix Strategy in Deployments</h3>
//                     </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://www.freecodecamp.org/news/app-directory-nextjs/" target="_blank">
//                         <Image src="/Freecodecamp Banner 2.png" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>How to Use the App Directory in Next.js.</h3>
//                 </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/" target="_blank">
                    
//                     <Image src="/Freecodecamp Banner.png" width={450} height={270} />
//                     <small>by Quincy Oghenetejiri</small>
//                     <h3>How to Use Redux Toolkit to Manage State in Your React Application</h3>
//                 </Link>
//                 </div>

//             </div>
//             <div className="flex flex-col md:flex-row justify-evenly">
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/making-use-of-react-query-in-fetching-data-and-adding-pagination-for-performance-optimization-in-react" target="_blank">
//                         <Image src="/React Query banner.png" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>Making Use of React Query in Fetching Data and Adding Pagination for Performance Optimization in React.</h3>
//                     </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/using-tailwind-css-and-sass-to-set-up-your-nextjs-project" target="_blank">
//                         <Image src="/Nextjs and Sass.png" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>Using Tailwind CSS and SASS to Set Up Your Next.js Project</h3>
//                 </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://www.cherryservers.com/blog/python-list-length">
                    
//                     <Image src="/Python article.jpg" width={450} height={270} />
//                     <small>by Quincy Oghenetejiri</small>
//                     <h3>How to Get the Length of a List in Python</h3>
//                 </Link>
//                 </div>

//             </div>
//             <div className="flex flex-col md:flex-row justify-evenly">
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/creating-a-typewriting-effect-in-reactjs" target="_blank">
//                         <Image src="/React Typewriting.png" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>Creating a typewriting-effect in React.js</h3>
//                     </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/creating-a-typewriting-effect-using-vanilla-javascript" target="_blank">
//                         <Image src="/Type Writing.png" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>Creating a Typewriting-effect using Vanilla JavaScript</h3>
//                 </Link>
//                 </div>
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/creating-a-custom-api-with-strapi">
                    
//                     <Image src="/Strapi Article (2).png" width={450} height={270} />
//                     <small>by Quincy Oghenetejiri</small>
//                     <h3>Creating a Custom Api with Strapi</h3>
//                 </Link>
//                 </div>

//             </div>
//             <div className="flex flex-col md:flex-row justify-evenly">
//                 <div className="blog">
//                     <Link href="https://quincyoghenetejiri.hashnode.dev/writing-maintainable-tests-in-react-using-the-react-testing-library" target="_blank">
//                         <Image src="/React testing library.avif" width={450} height={270} />
//                         <small>by Quincy Oghenetejiri</small>
//                         <h3>Writing Maintainable Tests in React using the React Testing Library</h3>
//                     </Link>
//                 </div>
                
                

//             </div>
            
            
            
            
//         </div>
//      );
// }
 
// export default Blogs;

import Link from "next/link";
import "./blog.css"
import Image from "next/image";
import { articles } from "./content/article";

const Blogs = () => {
    return ( 
        <div className="blogs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="blog">
                        <Link href={article.url} target="_blank">
                            <Image 
                                src={article.image} 
                                width={450} 
                                height={270} 
                                alt={article.title}
                            />
                            <small>by {article.author}</small>
                            <h3>{article.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs; 