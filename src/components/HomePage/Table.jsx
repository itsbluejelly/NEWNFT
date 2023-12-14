// IMPORTING NECESSARY FILES
// IMPORTING COMPONENTS
import { Icon } from "@iconify/react";
import tableData from "../../database/tableData";

// IMPORTING CSS FILE
// EXPORTING A FUNCTION THAT RETURNS A TABLE

export const TableContainer = () => {
  const tableOne = tableData.slice(0, 6);
  const tableTwo = tableData.slice(6, 12);

  const firstTableRows = tableOne.map((nft, index) => {
    return (
      <tr
        className="whitespace-nowrap min-w-full text-sm border-b divide-slate-700"
        key={index}
      >
        <td className="">{nft.id}</td>
        <td className="text-left">
          <div className="flex flex-row flex-nowrap items-center px-4 py-2">
            <div className="mr-3">
              <Icon
                icon="pajamas:profile"
                color="#ccd1de"
                width="38"
                height="38"
                hFlip={true}
              />
            </div>
            <div>
              <div className="">{nft.Collections}</div>
              <div className=" md:hidden lg:hidden xl:hidden sm:hidden 2xl:hidden flex flex-row flex-nowrap gray-color">
                FLOOR: <div className="ml-2 font-bold ">{nft.Floors[0]}</div>
                <div className="text-[#31c48d] flex flex-row flex-nowrap justify-self-center items-center ">
                  <Icon
                    className="max-[640px]:hidden"
                    icon="ph:arrow-up-left-light"
                    color="#31c48d"
                    width="16"
                    height="16"
                    rotate={1}
                  />
                  <span className="ml-2">{nft.Floors[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col flex-nowrap items-center px-4 py-2">
            <div className="font-bold">{nft.Volume[0]}</div>
            <div className="text-[#f05252] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Volume[1]}</span>
            </div>
          </div>
        </td>
        <td className="max-[640px]:hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Floors[0]}</div>
            <div className="text-[#31c48d] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#31c48d"
                width="16"
                height="16"
                rotate={1}
              />
              <span>{nft.Floors[1]}</span>
            </div>
          </div>
        </td>
        <td className="max-[640px]:hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Owners[0]}</div>
            <div className="text-[#f05252] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Owners[1]}</span>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  const secondTableRows = tableTwo.map((nft, index) => {
    return (
      <tr
        className="whitespace-nowrap min-w-full text-sm border-b divide-slate-700"
        key={index}
      >
        <td className="">{nft.id}</td>
        <td className="text-left">
          <div className="flex flex-row flex-nowrap items-center px-4 py-2">
            <div className="mr-3">
              <Icon
                icon="pajamas:profile"
                color="#ccd1de"
                width="38"
                height="38"
                hFlip={true}
              />
            </div>
            <div>
              <div className=" ">{nft.Collections}</div>
              <div className=" md:hidden lg:hidden xl:hidden sm:hidden 2xl:hidden flex flex-row flex-nowrap gray-color">
                FLOOR: <div className="ml-2 font-bold ">{nft.Floors[0]}</div>
                <div className="text-[#31c48d] flex flex-row flex-nowrap justify-self-center items-center ">
                  <Icon
                    className="max-[640px]:hidden"
                    icon="ph:arrow-up-left-light"
                    color="#31c48d"
                    width="16"
                    height="16"
                    rotate={1}
                  />
                  <span className="ml-2">{nft.Floors[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex flex-col flex-nowrap items-center px-4 py-2">
            <div className="font-bold ">{nft.Volume[0]}</div>
            <div className="text-[#f05252] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Volume[1]}</span>
            </div>
          </div>
        </td>
        <td className="max-[640px]:hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Floors[0]}</div>
            <div className="text-[#31c48d] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#31c48d"
                width="16"
                height="16"
                rotate={1}
              />
              <span>{nft.Floors[1]}</span>
            </div>
          </div>
        </td>
        <td className="max-[640px]:hidden">
          <div className="flex flex-col flex-nowrap px-4 py-2">
            <div className="font-bold ">{nft.Owners[0]}</div>
            <div className="text-[#f05252] flex flex-row flex-nowrap justify-self-center mx-auto text-xs">
              <Icon
                icon="ph:arrow-up-left-light"
                color="#f05252"
                width="16"
                height="16"
                rotate={2}
              />
              <span>{nft.Owners[1]}</span>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full flex flex-col xl:flex-row flex-nowrap px-12 gap-8 items-center mt-7">
      <table className=" w-4/5 text-center flex-1 p-4 xl:w-1/2 xl:mr-auto">
        <thead className="gray-color border-b divide-slate-700">
          <tr className="">
            <th></th>
            <th className="text-left p-2">COLLECTION</th>
            <th>VOLUME</th>
            <th className="max-[640px]:hidden p-2">FLOOR</th>
            <th className="max-[640px]:hidden p-2">OWNERS</th>
          </tr>
        </thead>
        <tbody className="xl:hidden ">
          {firstTableRows}

          {secondTableRows}
        </tbody>
        <tbody className="sm:hidden lg:hidden md:hidden max-[640px]:hidden xl:table-row-group">
          {firstTableRows}
        </tbody>
      </table>
      <table className="sm:hidden lg:hidden md:hidden max-[640px]:hidden xl:table w-1/2 text-center">
        <thead className="gray-color border-b divide-slate-700">
          <tr>
            <th></th>
            <th className="p-2">COLLECTION</th>
            <th className="p-2">VOLUME</th>
            <th className="p-2">FLOOR</th>
            <th className="p-2">OWNERS</th>
          </tr>
        </thead>
        <tbody>{secondTableRows}</tbody>
      </table>
    </div>
  );
};

export default function Table() {
  return (
    <div className="flex flex-col flex-nowrap items-center w-full mb-12">
      <div className="w-full flex flex-col gap-2 flex-nowrap md:w-4/5 md:gap-4 lg:flex-row  lg:gap-2">
        <div className="hidden md:inline-flex w-4/5 lg:w-fit">
          <h3 className=" text-2xl font-medium md:text-4xl whitespace-nowrap">Top NFT Collections</h3>
        </div>

        <div className="flex flex-col-reverse w-full gap-2 items-center md:flex-row md:justify-between whitespace-nowrap ">
          <div className="flex flex-row items-center w-4/5 justify-around dark:bg-[#1d2022] py-3 px-4 rounded-lg md:w-fit md:rounded-full">
            <span className="flex flex-row flex-nowrap text-[#9ca3af]">
              Total 24h Volume:{" "}
            </span>{" "}
            <span className="flex flex-row flex-nowrap">
              <span className="mx-2 text-white font-semibold">450.6k ₳</span>{" "}
              <span className="text-[#f05252] flex flex-row items-center flex-nowrap">
                <Icon
                  icon="tdesign:arrow-left-down"
                  color="#f05252"
                  width="19"
                  height="19"
                  hFlip={true}
                />{" "}
                26.78%
              </span>
            </span>
          </div>
          <div className="text-[#9ca3af] flex flex-row items-center justify-evenly border-[1px] p-2 border-[#2f3641] w-4/5 font-medium rounded-lg md:w-fit md:border-none">
            <div className="py-1 px-2 cursor-pointer active:bg-[#76A9FA] rounded-lg active:text-[#111827]">
              1h
            </div>
            <div className="py-1 px-2 cursor-pointer bg-[#76A9FA] rounded-lg text-[#111827]">
              24h
            </div>
            <div className="py-1 px-2 cursor-pointer active:bg-[#76A9FA] rounded-lg active:text-[#111827]">
              7d
            </div>
            <div className="py-1 px-2 cursor-pointer active:bg-[#76A9FA] rounded-lg active:text-[#111827]">
              30d
            </div>
            <div className="py-1 px-2 cursor-pointer active:bg-[#76A9FA] rounded-lg active:text-[#111827]">
              All
            </div>

            <span
              className="hidden md:inline-flex whitespace-nowrap text-sm py-2 px-5 dark:bg-[#18191b]  border-[1px] border-[#2f3641] rounded-lg items-center"
              style={{ cursor: "pointer" }}
              onClick={() => location.assign("/allcollections")}
            >
              View All
            </span>
          </div>
          <div className="w-4/5 flex-initial md:hidden ">
            <h3 className=" text-2xl font-medium ">
              Top Collections
            </h3>
          </div>
        </div>
      </div>
      <div className="table-cont w-screen justify-center place-content-center">
        <TableContainer />
      </div>
      <button className="lg:hidden w-4/5 mt-4 font-medium text-sm py-2 px-5 dark:bg-[#18191b] rounded-lg border-solid border-[1px] border-[#2f3641]  dark:text-white dark:hover:bg-[#1d2022]">
        View All
      </button>
    </div>
  );
}
