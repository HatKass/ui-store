import { Latest_Posts } from "@/constants";

const LastPosts = () => {
  return (
    <section className="space-y-[30px]">
      <div className="flex items-center justify-between">
        <h3 className="text-lg lg:text-3xl">LATEST POSTS</h3>
        <a className=" " href="#">
          <span className=" relative after:absolute after:content-[''] after:-bottom-2 after:h-[1.5px] after:rounded-md after:bg-slate-800/10 after:w-full after:left-0 ">
            READ BLOGS
          </span>
        </a>
      </div>
      <div className="lg:grid md:grid sm:grid flex flex-wrap lg:grid-cols-3 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-12 ">
        {Latest_Posts.map((post, index) => (
          <div
            key={index}
            className="space-y-[14px] w-full lg:block flex flex-col"
          >
            <img className="w-full" src={post.img} alt="post" />
            <div className="flex flex-col gap-y-[6px] uppercase">
              <span className="text-[#848484] lg:text-[13px]">{post.date}</span>
              <span className="text-[#272727] lg:text-xl">{post.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastPosts;
