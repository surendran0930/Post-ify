import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="w-[70%]">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1 items-center">
              {/* <div className="flex gap-2"> */}
              <div>
                {/* <AccountCircleIcon />
                 */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </div>
              <div>
                <h2 className="text-base font-semibold ">Surendran</h2>
              </div>
              {/* </div> */}

              <div>
                <p>dates</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-[24px] font-bold leading-8">
                  Advice From a Software Engineer With 8 Years of Experience
                </h1>
              </div>
              <div>
                <h2 className="line-clamp-2 text-[20px] leading-[30px]">
                  My name is Benoit. I have been a software engineer for the
                  past eight and a half years. I stayed at my previous (and
                  first) company for seven and a half years, then I joined a new
                  one in early 2022. This article comes from a recent
                  self-reflection on the things I wish I had started doing
                  earlier in my career and the things I wish I had done
                  differently. What I am sharing here may be useful to any
                  junior to mid-level developer who wishes to improve and
                  progress toward the title of senior and beyond.
                </h2>
              </div>
            </div>

            <div className="inline-flex gap-2">
              {/* <p>
                <Button variant="contained">UI</Button>
              </p>
              <p>
                <Button variant="contained">tag</Button>
              </p>

              <p>
                <Button variant="contained">frontEnd </Button>
              </p> */}
              <div className="bg-[#EEE] py-0 px-[20px] rounded-lg">
                <h2 className="font-semibold">UX/UI Design</h2>
              </div>
            </div>
            <div className="flex justify-between w-full ">
              <div onClick={handleLike} className="w-[50%]">
                <FavoriteBorderIcon />
              </div>
              <div onClick={handleComments} className="w-[50%]">
                <CommentIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
          <div>
            <img src={sampleImg} alt="sample" className="w-[112px] h-[112px]" />
          </div>
        </div>
        <div
        className="flex  gap-4 w-full border-2  border-inherit rounded-xl justify-center px-[10px] py-[20px] font-sans"
        onClick={fullCardHandle}
      >
        <div>
          <div className="flex w-[100%] justify-center gap-6">
            <div className="w-[80%] flex flex-col justify-start gap-4  ">
              <div className="flex gap-[11px] items-center">
                {/* <div className="flex gap-2"> */}
                <div>
                  {/* <AccountCircleIcon />
                   */}
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                </div>
                <div>
                  <h2 className="text-base font-semibold font-sans">
                    Surendran
                  </h2>
                </div>
                {/* </div> */}

                <div>
                  <p>dates</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-[24px] font-bold leading-8">
                    Advice From a Software Engineer With 8 Years of Experience
                  </h1>
                </div>
                <div>
                  <p className="line-clamp-2 font-normal text-[20px] leading-[30px] tracking-[0.4px]">
                    My name is Benoit. I have been a software engineer for the
                    past eight and a half years. I stayed at my previous (and
                    first) company for seven and a half years, then I joined a
                    new one in early 2022. This article comes from a recent
                    self-reflection on the things I wish I had started doing
                    earlier in my career and the things I wish I had done
                    differently. What I am sharing here may be useful to any
                    junior to mid-level developer who wishes to improve and
                    progress toward the title of senior and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  flex-col gap-[24px]">
              <div className="bg-[#EEE] py-0 px-[20px] rounded-lg  max-w-max ">
                <h2 className="font-semibold text-[16px]">UX/UI Design</h2>
              </div>
              <div className="flex gap-[36px] ">
                <div onClick={handleLike} className="">
                  <FavoriteBorderIcon />
                </div>
                {/* <div onClick={handleComments} className="">
    <CommentIcon />
  </div> */}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="flex  gap-4 w-full border-2  border-inherit rounded-xl justify-center px-[10px] py-[20px] font-sans"
        onClick={fullCardHandle}
      >
        <div className="flex flex-col gap-[24px] border-2 ">
          <div className="w-[80%] flex flex-col justify-start gap-4  ">
            <div className="flex gap-[11px] items-center">
              {/* <div className="flex gap-2"> */}
              <div>
                {/* <AccountCircleIcon />
                 */}
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </div>
              <div>
                <h2 className="text-base font-semibold font-sans">Surendran</h2>
              </div>
              {/* </div> */}

              <div>
                <p>dates</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-[24px] font-bold leading-8">
                  Advice From a Software Engineer With 8 Years of Experience
                </h1>
              </div>
              <div>
                <p className="line-clamp-2 font-normal text-[20px] leading-[30px] tracking-[0.4px]">
                  My name is Benoit. I have been a software engineer for the
                  past eight and a half years. I stayed at my previous (and
                  first) company for seven and a half years, then I joined a new
                  one in early 2022. This article comes from a recent
                  self-reflection on the things I wish I had started doing
                  earlier in my career and the things I wish I had done
                  differently. What I am sharing here may be useful to any
                  junior to mid-level developer who wishes to improve and
                  progress toward the title of senior and beyond.
                </p>
              </div>
            </div>
            <div className="flex  flex-col gap-[24px]">
              <div className="bg-[#EEE] py-0 px-[20px] rounded-lg  max-w-max ">
                <h2 className="font-semibold text-[16px]">UX/UI Design</h2>
              </div>
              <div className="flex gap-[36px] ">
                <div onClick={handleLike} className="">
                  <FavoriteBorderIcon />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-end items-center">
            <div>
              <img
                src={sampleImg}
                alt="sample"
                className="w-[154px] h-[148px]"
              />
            </div>
          </div>
        </div>
      </div>
      // <div className="flex w-full">
    //   <div className=" rounded overflow-hidden shadow-lg bg-white p-4">
    //     <div className="px-6 py-4">
    //       <h1 className="text-2xl font-semibold text-black-900">
    //         15 Killer Websites for Web Developers
    //       </h1>

    //       <p className="text-black-700 text-base">
    //         99.9% of developers don't know all of them. — As a front-end
    //         development engineer, you must have used many tools to increase your
    //         productivity. They can be websites, documentation, or a
    //         JavaScript...
    //       </p>
    //     </div>
    //     <div className="px-6 pt-4 pb-2">
    //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //         #FrontEndDevelopment
    //       </span>
    //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //         4 min read
    //       </span>
    //     </div>
    //   </div>
    //   <div>
    //     <img src="./src/assets/image.png" />
    //   </div>
    // </div>
    </div>
    
  )
}

export default Home