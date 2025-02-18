import BlogPosts from "../../components/blogpost"
import Mainbanner from "../../components/mainbanner"
import SocialIcon from "../../components/socialicons"
import Navbarmanu from "../../components/navbarmanu"




const page = () => {
    return (
<>
<Navbarmanu/>
<Mainbanner name="Our Blog" pageName="Our Blog"/>
        <div>
            

            <div className="w-[80%] max-lg:w-[95%] py-20 flex justify-between m-auto">
                <BlogPosts/>

                <div className="sidebar w-[424px] bg-white p-4 border border-gray-200 space-y-6 max-md:hidden">
                    {/* Search Box */}
                    <div>
                        <input
                            type="text"
                            placeholder="Search Your Keyword..."
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                        />
                    </div>

                    {/* Profile Section */}
                    <div className="text-center border border-gray-300 rounded p-4">
                        <img
                            src="/blogman.svg"
                            alt="Profile"
                            className="w-20 h-20 mx-auto rounded-full"
                        />
                        <h3 className="mt-2 font-semibold">Prince Miyako</h3>
                        <p className="text-sm text-gray-500">Blogger & Photographer</p>
                        <div className="text-orange-500 flex justify-center space-x-1 mt-1 text-sm">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            <span className="text-gray-500">(5 Reviews)</span>
                        </div>
                        <div className="flex justify-center space-x-2 mt-3">
                            {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500"
                                >
                                    <i className={`fab fa-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Recent Post */}
                    <div>
    <h3 className="font-semibold text-lg mb-3">Recent Post</h3>
    <div className="space-y-4">
        {[
            { src: "/blogpgside1.svg", date: "June 28, 2023", title: "Post Title 1" },
            { src: "/blogpgside2.svg", date: "July 15, 2023", title: "Post Title 2" },
            { src: "/blogpgside3.svg", date: "August 10, 2023", title: "Post Title 3" },
            { src: "/blogpgside4.svg", date: "September 5, 2023", title: "Post Title 4" },
        ].map((post, index) => (
            <div key={index} className="flex items-center space-x-4">
                <img
                    src={post.src}
                    alt="Post"
                    className="w-12 h-12 rounded"
                />
                <div>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p className="text-sm font-medium">{post.title}</p>
                </div>
            </div>
        ))}
    </div>
</div>
                    {/* Filter By Menu */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Filter By Menu</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Chicken Fry", count: 28 },
                                { name: "Burger Food", count: 48 },
                                { name: "Pizza", count: 16 },
                                { name: "Fresh Fruits", count: 38 },
                                { name: "Vegetables", count: 15 },
                            ].map((item) => (
                                <div key={item.name} className="flex justify-between text-sm">
                                    <span>{item.name}</span>
                                    <span>({item.count})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Popular Tags */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Popular Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Sandwich",
                                "Tikka",
                                "Bbq",
                                "Restaurant",
                                "Chicken Shawarma",
                                "Health",
                                "Fastfood",
                                "Food",
                                "Pizza",
                                "Burger",
                                "Chicken",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200 cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Photo Gallery */}
                    <div>
    <h3 className="font-semibold text-lg mb-3">Photo Gallery</h3>
    <div className="grid grid-cols-3 gap-2">
        {[
            "/bloggal1.svg",
            "/blogggal2.svg",
            "/bloggal3.svg",
            "/bloggal4.svg",
            "/bloggal5.svg",
            "/bloggal4.svg",
        ].map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-20 h-20 rounded object-cover"
            />
        ))}
    </div>
</div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
                       <SocialIcon/>
                    </div>
                </div>

            </div>
        </div>
</>
        
    )
}

export default page