import useComments from "@/components/hooks/useComments";
import Image from "next/image";
import Link from "next/link";

const Post = ({post}) => {
    const [comments] = useComments()

    const filterComments = comments?.filter(item => item?.postId === post?._id)

    console.log(filterComments);
    return (
        <div>
            <div className="">
                <h2 className="text-2xl font-bold text-gray-600 text-justify">{post?.city_name}... {post?.district_name}</h2>
                <p className="text-sm text-gray-400 text-justify mt-2 my-4">{post?.post_date} <span className="px-2">|</span> <span>{filterComments?.length} Comments</span></p>
                <Image className="w-full h-96 2xl:h-[600px]" src={post?.image} alt="post" height={20} width={600}></Image>
                <p className="text-sm text-justify text-gray-500 py-7">{post?.description}</p>
                <div>
                    <Link href={`/cityblog/${post?._id}`} className="bg-blue-800 hover:bg-orange-800 text-white font-bold py-2 px-10 text-sm rounded-full">Read more</Link>
                </div>
            </div>
                <hr className='border-gray-300 mt-10' />
        </div>
    );
};

export default Post;