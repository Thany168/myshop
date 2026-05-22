import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function Dashboard() {
  return (
    <>
      <div>
        <div className="w-full flex justify-between">
          <div>
            <p className="text-xl">DashBoard</p>
          </div>
          <div className="text-sm">
            <span className="text-blue-400">Home</span> / DashBoard
          </div>
        </div>
        <div className=" mt-8 grid gap-y-4 md:grid-cols-2 md:gap-5  lg:grid-cols-2 xl:grid-cols-4 ">
          <div className=" rounded w-full  h-32 bg-[#17A2B8]">
            <div className=" p-3 flex justify-between">
              <div className="grid gap-y-4 text-white ">
                <b className="text-2xl">150</b>
                <p className="text-1xl">Total Pets</p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="100px"
                  fill="#e3e3e3"
                >
                  <path d="M169.86-485Q132-485 106-511.14t-26-64Q80-613 106.14-639t64-26Q208-665 234-638.86t26 64Q260-537 233.86-511t-64 26ZM291-681.14q-26-26.14-26-64T291.14-809q26.14-26 64-26T419-808.86q26 26.14 26 64T418.86-681q-26.14 26-64 26T291-681.14Zm250 0q-26-26.14-26-64T541.14-809q26.14-26 64-26T669-808.86q26 26.14 26 64T668.86-681q-26.14 26-64 26T541-681.14ZM789.86-485Q752-485 726-511.14t-26-64Q700-613 726.14-639t64-26Q828-665 854-638.86t26 64Q880-537 853.86-511t-64 26ZM266-75q-42 0-69-31.53-27-31.52-27-74.47 0-42 25.5-74.5T250-318q22-22 41-46.5t36-50.5q29-44 65-82t88-38q52 0 88.5 38t65.5 83q17 26 35.5 50t40.5 46q29 30 54.5 62.5T790-181q0 42.95-27 74.47Q736-75 694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                </svg>
              </div>
            </div>
            <button className="w-full  text-white text-xs items-center bg-[#1591A5]">
              More Info <ArrowCircleRightIcon />
            </button>
          </div>
          <div className=" rounded w-full  h-32 bg-[#006EE5]">
            <div className=" p-3 flex justify-between">
              <div className="grid gap-y-4 text-white ">
                <b className="text-2xl">545</b>
                <p className="text-1xl">Total Pet Products</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="100px"
                  fill="#e3e3e3"
                >
                  <path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z" />
                </svg>
              </div>
            </div>
            <button className="w-full  text-white text-xs items-center bg-[#007CBA]">
              More Info <ArrowCircleRightIcon />
            </button>
          </div>
          <div className=" rounded w-full  h-32 bg-[#28A745]">
            <div className=" p-3 flex justify-between">
              <div className="grid gap-y-4 text-white ">
                <b className="text-2xl">1322</b>
                <p className="text-1xl">Total Vendors</p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="100px"
                  fill="#e3e3e3"
                >
                  <path d="m480-840 320 240v480H160v-480l320-240Zm78 437.88q32-32.12 32-78T557.88-558q-32.12-32-78-32T402-557.88q-32 32.12-32 78T402.12-402q32.12 32 78 32T558-402.12Zm-113.5-42.2q-14.5-14.33-14.5-35.5 0-21.18 14.32-35.68 14.33-14.5 35.5-14.5 21.18 0 35.68 14.32 14.5 14.33 14.5 35.5 0 21.18-14.32 35.68-14.33 14.5-35.5 14.5-21.18 0-35.68-14.32ZM479-250q-55 0-106.5 18T278-180h403q-44-34-95.5-52T479-250ZM220-574v365q54-48 120.52-74.5Q407.03-310 479-310q72.67 0 139.84 27Q686-256 740-208v-366L480-763 220-574Zm260 94Z" />
                </svg>
              </div>
            </div>
            <button className="w-full  text-white text-xs items-center bg-[#24963E]">
              More Info <ArrowCircleRightIcon />
            </button>
          </div>
          <div className=" rounded w-full  h-32 bg-[#FFC107]">
            <div className=" p-3 flex justify-between">
              <div className="grid gap-y-4 text-white ">
                <b className="text-2xl">44,300.00</b>
                <p className="text-1xl">Total Income</p>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="80px"
                  viewBox="0 -960 960 960"
                  width="100px"
                  fill="#e3e3e3"
                >
                  <path d="M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700v60ZM220-340v-400 400Z" />
                </svg>
              </div>
            </div>
            <button className="w-full   text-xs items-center bg-[#E5AD06]">
              More Info <ArrowCircleRightIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
