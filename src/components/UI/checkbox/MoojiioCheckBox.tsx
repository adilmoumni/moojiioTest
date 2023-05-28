import React from "react";

interface MoojiioCheckboxProps {
  title: string;
  subtitle: string;
  checked: boolean;
  recomendation?: number;
  onChange: () => void;
}

const MoojiioCheckbox: React.FC<MoojiioCheckboxProps> = ({
  title,
  subtitle,
  checked,
  recomendation = 0,
  onChange,
}) => {
  return (
    <div
      className={`border 
      ${checked ? "border-blue-500" : "border-gray-300"} 
      ${checked ? "bg-checkbox-bg" : "bg-white"} 
      p-1 md:p-4 rounded-lg flex items-center w-full m-1 cursor-pointer`}
      onClick={onChange}
    >
      <div className="p-2">
        <div className="flex items-center md:mr-4 mb-2">
          <input
            type="checkbox"
            id="A3-yes"
            name="A3-confirmation"
            checked={checked}
            onChange={onChange}
            className="opacity-0 absolute "
          />
          <div
            className={` bg-gray-100 border border-gray-300 rounded w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500`}
          >
            <img
              className={`${checked ? "block" : "hidden"}`}
              src="/assets/checkbox.svg"
              alt="checkbox"
            />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-full text-start">
        <h4 className="not-italic font-medium text-sm text-gray-800 flex-none order-none self-stretch flex-grow-0">
          {title}
        </h4>
        <p className="not-italic font-normal text-sm text-gray-600 flex-none order-1 flex-grow-0">
          {subtitle}
        </p>
        {recomendation != 0 ? (
          <div className="flex">
            <img src="/assets/icon-recomendation.svg" alt="recomendation" />
            <div className="not-italic font-semibold text-xs flex items-center text-blue-500">
              Recommended by {recomendation} team members
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default MoojiioCheckbox;
