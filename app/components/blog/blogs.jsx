import Link from "next/link";
import "./blog.css"
import Image from "next/image";

const Blogs = () => {
    return ( 
        <div className="blogs">
            <h1 className="text-white text-center" >Blogs</h1>
            <div className="flex justify-evenly">
                <div className="blog">
                    <Link href="https://adamtheautomator.com/github-actions-matrix/" target="_blank">
                        <Image src="/GitHub Actions.webp" width={450} height={270} />
                        <small>by Quincy Oghenetejiri</small>
                        <h3>How to Use the GitHub Actions Matrix Strategy in Deployments</h3>
                    </Link>
                </div>
                <div className="blog">
                    <Link href="https://www.freecodecamp.org/news/app-directory-nextjs/" target="_blank">
                        <Image src="/Freecodecamp Banner 2.png" width={450} height={270} />
                        <small>by Quincy Oghenetejiri</small>
                        <h3>How to Use the App Directory in Next.js.</h3>
                </Link>
                </div>
                <div className="blog">
                    <Link href="https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/" target="_blank">
                    
                    <Image src="/Freecodecamp Banner.png" width={450} height={270} />
                    <small>by Quincy Oghenetejiri</small>
                    <h3>How to Use Redux Toolkit to Manage State in Your React Application</h3>
                </Link>
                </div>

            </div>
            <div className="flex justify-evenly">
                <div className="blog">
                    <Link href="https://quincyoghenetejiri.hashnode.dev/making-use-of-react-query-in-fetching-data-and-adding-pagination-for-performance-optimization-in-react" target="_blank">
                        <Image src="/GitHub Actions.webp" width={450} height={270} />
                        <small>by Quincy Oghenetejiri</small>
                        <h3>Making Use of React Query in Fetching Data and Adding Pagination for Performance Optimization in React.</h3>
                    </Link>
                </div>
                <div className="blog">
                    <Link href="https://quincyoghenetejiri.hashnode.dev/using-tailwind-css-and-sass-to-set-up-your-nextjs-project" target="_blank">
                        <Image src="/Freecodecamp Banner 2.png" width={450} height={270} />
                        <small>by Quincy Oghenetejiri</small>
                        <h3>Using Tailwind CSS and SASS to Set Up Your Next.js Project</h3>
                </Link>
                </div>
                <div className="blog">
                    <Link href="https://www.freecodecamp.org/news/use-redux-toolkit-to-manage-state-in-react-apps/">
                    
                    <Image src="/Freecodecamp Banner.png" width={450} height={270} />
                    <small>by Quincy Oghenetejiri</small>
                    <h3>How to Use Redux Toolkit to Manage State in Your React Application</h3>
                </Link>
                </div>

            </div>
            
            
            
            
        </div>
     );
}
 
export default Blogs;