import  { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const PortfolioModals = ({ open, setOpen, portfolioData,tech}) => {

// const PortfolioModals = ({ open, setOpen, portfolioData, tags, Languages }) => {
      const [selectImg, setSelectImg] = useState("");
  const {
    projectType,
    projectName,
    projectImg,
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
    thumb9,
    projectDetails,
    projectSpeciality,
    adminPanel,
    adminPass,
    technologieUsed,
    projectStart,
    projectEnd,
    clientCode,
    serverCode,
    client
  } = portfolioData;

  const techItems = tech?.split(",")
  console.log(tech,techItems)

  const cancelButtonRef = useRef(null);
    return (
          <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex text-gray-900 items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-8 md:my-8 my-4 sm:align-middle lg:w-10/12 w-11/12 mx-auto  md:w-10/12 ">
              <h2 className="py-4 text-center text-lg md:text-2xl lg:text-4xl text-yellow-800 font-bold">
                {projectName}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className=" col-span-3">
                  <div className="img-div  rounded  overflow-y-scroll">
                    <img
                      id="main-Img "
                      src={selectImg ? selectImg : projectImg}
                      alt=""
                    />
                  </div>
                  <div className="grid mt-6 mb-4 thumb">
                    {thumb1 && (
                      <div className="cursor-pointer rounded shadow thumb-item flex justify-center items-center overflow-hidden">
                        <img
                          onClick={() => setSelectImg(thumb1)}
                          className="h-full thumb-items"
                          src={thumb1}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb2 && (
                      <div className="cursor-pointer   rounded shadow thumb-item flexjustify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb2)}
                          className="h-full thumb-items"
                          src={thumb2}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb3 && (
                      <div className="cursor-pointer   rounded shadow thumb-item flexjustify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb3)}
                          className="h-full thumb-items"
                          src={thumb3}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb4 && (
                      <div className="cursor-pointer  rounded shadow thumb-item flex justify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb4)}
                          className="h-full thumb-items"
                          src={thumb4}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb5 && (
                      <div className="cursor-pointer  rounded  thumb-item flex justify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb5)}
                          className="shadow-lg rounded-md thumb-items"
                          src={thumb5}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb6 && (
                      <div className="cursor-pointer  rounded   thumb-item flex justify-center  items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb6)}
                          className=" shadow-lg rounded-md thumb-items"
                          src={thumb6}
                          alt=""
                        />
                      </div>
                    )}

                    {thumb8 && (
                      <div className="cursor-pointer   rounded   thumb-item flex justify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb8)}
                          className="shadow-lg rounded-md thumb-items"
                          src={thumb8}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb9 && (
                      <div className="cursor-pointer  rounded  thumb-item flex justify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb9)}
                          className="shadow-lg rounded-md thumb-items"
                          src={thumb9}
                          alt=""
                        />
                      </div>
                    )}
                    {thumb7 && (
                      <div className="cursor-pointer  rounded shadow thumb-item flex justify-center items-center overflow-hidden ">
                        <img
                          onClick={() => setSelectImg(thumb7)}
                          className="thumb-items "
                          src={thumb7}
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mx-4 font-semibold  col-span-2">
                  <div className="my-2">
                    <span>Tags :</span>
                    
                    {techItems?.map((techItem,index) => (
                      <button key={index}  className="px-4 py-2 rounded-full bg-yellow-600 m-2">
                        {techItem}
                      </button>
                    ))}
                  </div>
                  {projectType && (
                    <p>
                      <span className="font-bold">Project Type: </span>
                      {projectType}
                    </p>
                  )}
                  <hr />
                  <div className="flex items-center gap-2">
                    <span>Links: </span>
                    {client && (
                      <div className="mt-3 mb-2">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-100 custom-btn text-sm font-normal px-3 py-2 rounded-md bg-[#f57070]"
                          href={client}
                        >
                          Client Site
                        </a>
                      </div>
                    )}
                    {clientCode && (
                      <div className="mt-3 mb-2">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-100 custom-btn text-sm font-normal px-3 py-2 rounded-md bg-[#f57070]"
                          href={clientCode}
                        >
                          Client Site Code
                        </a>
                      </div>
                    )}
                    {serverCode && (
                      <div className="mt-3 mb-2">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-100 custom-btn bg-yellow-600 text-sm font-normal px-3 py-2 rounded-md bg-[#f57070]"
                          href={serverCode}
                        >
                          Server Site Code
                        </a>
                      </div>
                    )}
                  </div>
                  <hr />
                 <p className="my-2">
                   <span className="text-gray-700 font-bold">
                     Project Details:
                   </span>{" "}
                   {projectDetails}
                 </p>
                 <p>
                   <hr />{" "}
                   <span className="font-bold">Technologies Used: </span>
                   {technologieUsed}
                 </p>
                 <hr />
                 {projectSpeciality && (
                   <p className="my-2">
                     <span className="font-bold">project speciality: </span>
                     {projectSpeciality}
                   </p>
                 )}
                 <hr />
                 {adminPanel && (
                   <>
                     <p>This is for the admin panel</p>
                     <p>Email: {adminPanel}</p>
                     <p>Password: {adminPass}</p>
                   </>
                 )}
                 <hr />
                 <p className="my-2">
                   Project starts in {projectStart} and ends in {projectEnd}
                 </p>

                 <div className="my-6 flex justify-center   ">
                   <a
                     onClick={() => setOpen(false)}
                     href="/#contact"
                     className="w-full text-center sm:w-3/6 sm:mx-auto mx-4 px-6 py-2 text-yellow-600 rounded-full bg-[#df6651]"
                   >
                     Contact me
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </Transition.Child>
       </div>
     </Dialog>
   </Transition.Root>
    );
};

export default PortfolioModals;

