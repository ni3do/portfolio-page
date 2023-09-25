const Education = () => {
  return (
    <div className="font-sen my-16 px-3 text-white" id="education">
      <p className="text-3xl font-bold text-white">Education</p>
      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="display:block text-slate-300-between flex-row items-center border-b-[0.1px] border-gray-500 py-1">
          <span className="float-left text-white">
            ETH Zürich &nbsp; Master of Computer Science
          </span>

          <span className="float-right">2022-2025, Zürich CH</span>
        </p>
        <p>- Major in Machine Intelligence and minor in Data Management</p>
      </div>
      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="display:block text-slate-300-between flex-row border-b-[0.1px] border-gray-500 py-1">
          <span className="float-left text-white">
            ETH Zürich &nbsp; Bachelor of Computer Science
          </span>
          <span className="float-right">2019-2022, Zürich CH</span>
        </p>
        <p className="margin-right:5em my-1">
          - Bachelors Thesis: Arbitrage Opportunities on Decentralized Exchanges
        </p>
      </div>
      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="display:block text-slate-300-between flex-row border-b-[0.1px] border-gray-500 py-1">
          <span className="float-left text-white">
            Kantonsschule Uster &nbsp; Gymnasium
          </span>
          <span className="float-right">2017-2018, Uster CH</span>
        </p>
        <p className="margin-right:5em my-1">
          - Major in applied mathematics and physics
        </p>
      </div>
      <div className="text-md custom:text-lg my-8 flex flex-col font-medium md:text-xl">
        <p className="display:block text-slate-300-between flex-row border-b-[0.1px] border-gray-500 py-1">
          <span className="float-left text-white">
            Kunst- und Sport-Gymnasium Rämibühl&nbsp; Gymnasium
          </span>
          <span className="float-right">2014-2017, Zürich CH</span>
        </p>
        <p className="margin-right:5em my-1">
          - Doing triathlon and snowboardcross
        </p>
      </div>
    </div>
  );
};

export default Education;
