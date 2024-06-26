
export default function ({
  label,
  onChange,
  placeholder
}: {
  label: string;
  onChange: () => void;
  placeholder:string
}) {
  return (
    <div className=" my-4">
        <div className=" mt-4 font-medium text-slate-800 ">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg w-60 p-2.5 "></input>
    </div>
  );
}
