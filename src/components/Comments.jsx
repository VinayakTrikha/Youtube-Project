const Comments = ({ data }) => {
  return (
    <div className=" ml-2 flex flex-col mb-4 mt-4">
      <div className="bg-gray-100 border h-2= p-2 flex flex-col border-l" >
        <span>{data.name}</span>
        <span >{data.text}</span>
      </div>
      <div className="ml-5 border-l">
        {data?.replies?.length > 0 &&
          data.replies.map((reply) => <Comments data={reply} />)}
      </div>
    </div>
  );
};

export default Comments;
