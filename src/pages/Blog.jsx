import React from 'react'
import Header from "../Header/Header";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {posts} from "../Data/Posts"

const Blog = () => {
  return (
    <>
         <Header/>  
          <main className="flex flex-col items-center text-start  pt-20 ">
               <div className="w-[90%] sm:w-[80%] md:w-[70%] text-start">
                 <p
                   className="text-white text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"
                   style={{ textShadow: "0px 0px 2px rgba(255, 255, 255, 0.7)" }}
                 >
                   Personal Blog
                 </p>
                 <h1 className="text-md ms-1 my-2  text-white/60">
                 Explore my blog for the latest updates, projects, and news.
                 </h1>
               </div>
               <div className="w-[90%] sm:w-[80%] md:w-[70%] h-auto rounded-lg border border-white/10 mt-8 mb-8">
                 <div className="flex w-full justify-between rounded border-b border-white/10">
                   {/* Left side - Profile */}
                   <div className="flex w-full sm:w-[40%] md:w-[40%] lg:w-[35%] xl:w-[26%] items-center gap-2 p-4 md:gap-4">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                                <AvatarImage src="../assets/user.jpg" alt="Profile picture" />
                                <AvatarFallback>YK</AvatarFallback>
                              </Avatar>
                     <div className="flex flex-col gap-0.5 md:gap-1 min-w-0">
                       <h1 className="text-white/80 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                         Yassir Kalkhi
                       </h1>
                       <p className="text-white/60 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                         Full Stack Developer
                       </p>
                     </div>
                    
                   </div>
                 </div>
                 <div className="w-full h-[80%] flex flex-col  md:flex-row ">
                   <div className="w-[20%]  flex flex-col items-center gap-6 p-4">
                       
                   </div>
         
                   <div className="flex flex-col items-center w-[60%]  md:border-l border-white/10  gap-6 p-4">
                        {posts.map((post,index)=>{
                            return (
                                <div key={index} className='w-full border border-white/10 rounded-md p-3'>
                                    <div className='flex items-center justify-between px-3 py-2'>
                                        <div className='flex items-center gap-3'>
                                               <Avatar className="h-8 w-8 sm:h-10 sm:w-10 ">
                                                     <AvatarImage src="../../public/icons/user.jpg" alt="Profile picture" />
                                                     <AvatarFallback>YK</AvatarFallback>
                                               </Avatar>
                                               <div className='flex flex-col'>
                                                 <span className='text-white/80 font-semibold'>@yasserkalkhi <i className="fa-solid fa-check ms-1"></i></span> 
                                                 <span className='text-xs text-white/50 font-semibold  mt-1 ms-1'>{post.date}</span> 
                                               </div>
                                               
                                         </div>
                                         <div>
                                         <i className="fa-solid fa-share text-white/50 text-xs"></i>
                                         </div>
                                    </div>
                                     <div className='p-6 pt-1 flex flex-col '>
                                         <span className='text-white text-2xl font-bold mb-2 mt-4'>{post?.title}</span> 
                                         <span className='text-sm text-white/50'>
                                            {post?.description} <br />
                                            {post.tags.map((tag,index)=>{
                                                     return(
                                                        <a className='text-blue-500 me-2 '>
                                                            #{tag}
                                                        </a>
                                                     )
                                            })}
                                         </span>
                                         <img src={post?.imageUrl} alt="" className='w-full pt-4 ' />
                                     </div>
                                  
                                </div>
                            )
                        })}
                           
                   </div>

                   <div className="w-[20%]  flex flex-col items-center border-l border-white/10 gap-6 p-4 ">
                     
                     </div>

                 </div>
               </div>
             </main>


    </>
  )
}

export default Blog