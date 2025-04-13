import { data, useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils";
import { useDispatch, useSelector } from "react-redux";


export const loader = async ({ params }) => {
  const req = await axiosInstance(`/product/${params.id}`);
  return req.data;

};

function Product() {
  const data = useLoaderData();
  const { cart } = useSelector((store) => store.cart);
  console.log(data, cart)
  const review = data.reviews;
  console.log(review);
  return (
    <div className=" py-3 px-4">
      <h1 className="text-xl">{data.title}</h1>
      <div className="flex items-start justify-between px-4">
        <div className="flex items-start">
          <img src={data.thumbnail} alt="" />
          <p className="w-100">{data.description}</p>
        </div>
        <div>
          {review.map((comment) => {
            return (
              <div key={comment.reviewerName
              } className="p-4 mb-4 bg-white rounded-lg shadow border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold text-gray-800">
                  </div>
                  {comment.reviewerName}
                  <div className="text-sm text-gray-500">{comment.date}</div>
                </div>
                <div className="flex items-center mb-3">
                {comment.rating} 
                 <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"> 
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                </div>

                <p className="text-gray-700">{comment.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
