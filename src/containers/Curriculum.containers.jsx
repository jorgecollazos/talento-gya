import React from "react";

const Curriculum = () => {
  return (
    <div className="container mx-auto my-5 flex flex-wrap">
      <div className="basis-1/3 bg-green-400 h-screen flex flex-col">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className="basis-2/3 bg-slate-600 h-screen">
        <div class="grid grid-cols-3 gap-4 content-center justify-items-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
