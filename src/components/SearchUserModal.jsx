import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../providers/ModalProvider";
import ChatPerson from "./ChatPerson";

const SearchUserModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <div className="h-screen w-screen left-0 top-0 fixed ">
          <div className=" h-full w-full bg-white overflow-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-1 md:col-span-3"></div>

              <div className="col-span-10 md:col-span-6">
                <div className="flex justify-end text-4xl my-5">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="p-3 rounded-md outline-none border w-full"
                    placeholder="Type username"
                  />
                </div>

                <div className="search-results mt-3">
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                  <ChatPerson person="Nasiv" />
                </div>
              </div>

              <div className="col-span-1 md:col-span-3 "></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchUserModal;
