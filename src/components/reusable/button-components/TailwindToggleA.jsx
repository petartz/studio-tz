const TailwindToggleA = (props) => {
  return (
    <div className="toggle-container">
      <label className="relative inline-flex cursor-pointer items-center">
        <input id="switch-2" onClick={props.onClick} type="checkbox" className="peer sr-only" />
        {/* <label for="switch-2" className="hidden"></label> */}
        <div className="peer h-4 w-11 rounded-full bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-900 peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
      </label>
    </div>
  )
};

export default TailwindToggleA;