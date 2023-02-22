import { RxAvatar } from 'react-icons/rx';

const Student = (props) => {
  return (
    <div className="bg-white hover:bg-[#F9FBFA] text-black m-5 p-5 font-semibold flex justify-around rounded-lg items-center">
      <div className="flex items-center gap-3">
        <div className="h-full">
          <RxAvatar className="h-full w-10" />
        </div>
        <div>
          <div className="text-lg">{props.name}</div>
          <div className="text-md text-[#848A97]">{props.email}</div>
        </div>
      </div>
      <div>
        <div
          className={
            props.status === 'Present'
              ? 'bg-[#f4fdf1d2] px-4 py-2 rounded-full text-[#17a31ee3]'
              : 'bg-[#fdf1f1] px-4 py-2 rounded-full text-[#a31717ec]'
          }
        >
          {props.status}
        </div>
      </div>
      <div className="text-[#848A97] font-semibold">{props.regNo}</div>
      <div className="text-[#915AF1] bg-[#F5F2FE] px-4 py-2 rounded-full">
        {props.details}
      </div>
      <div>
        <div className="text-lg">{props.facultyName}</div>
        <div className="text-md text-[#848A97]">{props.facultyEmail}</div>
      </div>
    </div>
  );
};

export default Student;
