import Image from "next/image";
import Link from "next/link";
import shoe1 from "../../public/images/shoe3.png";
import shoe2 from "../../public/images/shoe4.png";
import shoe3 from "../../public/images/shoe5.png";

const posts = [
  {
    id: 1,
    title: "The Art of Choosing the Perfect Pair of Shoes",
    excerpt:
      "Learn how to select shoes that combine comfort, style, and durability.",
    image: shoe1,
  },
  {
    id: 2,
    title: "Top Shoe Trends for 2024",
    excerpt:
      "Discover the top shoe trends that are taking the fashion world by storm this year.",
    image: shoe2,
  },
  {
    id: 3,
    title: "How to Care for Your Shoes",
    excerpt:
      "Tips and tricks for maintaining your shoes to keep them looking new and lasting longer.",
    image: shoe3,
  },
  {
    id: 4,
    title: "How to Care for Your Shoes",
    excerpt:
      "Tips and tricks for maintaining your shoes to keep them looking new and lasting longer.",
    image: shoe1,
  },
  {
    id: 5,
    title: "How to Care for Your Shoes",
    excerpt:
      "Tips and tricks for maintaining your shoes to keep them looking new and lasting longer.",
    image: shoe2,
  },
  {
    id: 6,
    title: "How to Care for Your Shoes",
    excerpt:
      "Tips and tricks for maintaining your shoes to keep them looking new and lasting longer.",
    image: shoe3,
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-100 ">
      <header className="bg-red-700 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold">ShoeSafari Blog</h1>
        <p className="mt-2 text-lg">Insights and Tips for Shoe Enthusiasts</p>
      </header>

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}
                className="text-red-700 hover:text-red-500 font-semibold">
                      Read More
             
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
