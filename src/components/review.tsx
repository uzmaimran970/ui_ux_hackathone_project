"use client";
import React, { useState } from "react";

interface Review {
  id: number;
  name: string;
  content: string;
}

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Ayesha",
      content:
        "This product is amazing! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Amna",
      content:
        "Another review: Ut placerat eros ac nibh fringilla, nec viverra libero bibendum.",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleAddComment = () => {
    if (newComment.trim() && userName.trim()) {
      const newReview: Review = {
        id: reviews.length + 1,
        name: userName.trim(),
        content: newComment.trim(),
      };
      setReviews([...reviews, newReview]);
      setNewComment(""); // Clear the input field
      setUserName(""); // Clear the name input field
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "description"
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </button>
        <button
          className={`px-6 py-2 font-medium ${
            activeTab === "reviews"
              ? "border-b-2 border-orange-500 text-orange-500"
              : "text-gray-600"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "description" && (
          <div>
            <p>
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
              purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
              sagittis. Vestibulum suscipit cursus bibendum. Integer at justo
              eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
              porttitor. Nulla quis dignissim ipsum.
            </p>
            <p className="mt-4">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
              blandit justo urna, id porttitor est dignissim nec. Pellentesque
              scelerisque hendrerit posuere.
            </p>
            <h3 className="text-lg font-bold mt-6">Key Benefits</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisi.
              </li>
              <li>
                Etiam nec massa et lectus faucibus ornare congue in nunc.
              </li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            {/* Reviews Section */}
            <h3 className="text-lg font-bold">Customer Reviews</h3>
            <div className="mt-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="mt-2 border-b border-gray-200 pb-2"
                >
                  <p className="font-bold">{review.name}</p>
                  <p>{review.content}</p>
                </div>
              ))}
              <p className="mt-4 text-gray-500">
                Showing {reviews.length} reviews.
              </p>
            </div>

            {/* Add Comment Section */}
            <div className="mt-6">
              <h4 className="text-lg font-bold">Add Your Comment</h4>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 mt-2"
                rows={4}
                placeholder="Write your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                onClick={handleAddComment}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-orange-600 transition"
              >
                Submit Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
