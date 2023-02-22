import { RxAvatar } from 'react-icons/rx';

const Student = (props) => {
  const changeHandler = () => {
    props.changeStatus(!props.status);
  };

  return (
    <div
      className={
        props.status === false
          ? 'bg-[#ee6767] hover:bg-[#ec3b3b] hover:cursor-pointer text-black m-5 p-5 font-semibold flex justify-between rounded-lg items-center'
          : 'bg-[#84f75e] hover:bg-[#56d82b] hover:cursor-pointer text-black m-5 p-5 font-semibold flex justify-between rounded-lg items-center'
      }
    >
      <div className="flex items-center gap-3">
        <div className="h-full">
          <RxAvatar className="h-full w-10" />
        </div>
        <div>
          <div className="text-lg">{props.name}</div>
          <div className="text-md text-[#595d66]">{props.email}</div>
        </div>
      </div>
      <div>
        <div
          className={
            props.status === true
              ? 'bg-[#f4fdf1d2] px-4 py-2 rounded-full text-[#17a31ee3]'
              : 'bg-[#fdf1f1] px-4 py-2 rounded-full text-[#a31717ec]'
          }
          onClick={changeHandler}
        >
          {props.status ? 'Present' : 'Absent'}
        </div>
      </div>
      <div className="font-semibold text-lg">{props.regNo}</div>

      <div className="text-[#ffffff] bg-[#d058dd] px-4 py-2 rounded-full">
        {props.details}
      </div>
      <div>
        <div className="text-lg min-w-[250px]">{props.facultyName}</div>
        <div className="text-md text-[#565a63] ">{props.facultyEmail}</div>
      </div>
    </div>
  );
};

export default Student;
