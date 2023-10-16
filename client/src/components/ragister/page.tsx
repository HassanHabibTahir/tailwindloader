"use client";
import { useCreateNote, useGetAllNotes } from "@/hooks/todo";
import React from "react";
import { CreateNotes } from "../../../gql/graphql";

const Register = () => {
  const [note, setNote] = React.useState<string>("");
  const { mutateAsync } = useCreateNote();
  const { notes } = useGetAllNotes();
  const AddNotes = React.useCallback(async () => {
    let noteNew: CreateNotes = {
      note: note,
    };
    console.log(noteNew, "new Note");
    await mutateAsync(noteNew);
  }, [note]);
  console.log(notes, "notes");
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/6 ">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
              onChange={(e) => setNote(e.target.value)}
            />
            <button
              onClick={() => AddNotes()}
              className="flex-no-shrink p-2 border-2 rounded text-[green] border-[green] hover:text-[white] hover:bg-[green]"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <div className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">
              Add another component to Tailwind Components
            </p>
            <button className="w-1/5 p-2 ml-4 mr-2 border-2 rounded hover:text-[#555555] text-[grey] border-grey hover:border-[#555555] ">
              Not Done
            </button>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-[#38C172] hover:bg-[#38C172]">
              Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-[#E3342F] border-[#E3342F] hover:text-white hover:bg-[#E3342F]">
              Remove
            </button>
          </div>
          <div className="flex mb-4 items-center">
            <p className="w-full line-through text-green">
              Submit Todo App Component to Tailwind Components
            </p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-[grey] border-grey ">
              Not Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
