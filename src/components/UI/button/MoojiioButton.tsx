import { ReactNode } from "react";

interface MoojiioButtonProps {
  label: string;
  children?: ReactNode;
  classNames?: string;
  onClick: () => void;
}

const MoojiioButton: React.FC<MoojiioButtonProps> = ({
  onClick,
  label,
  classNames,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classNames} flex justify-center items-center bg-t-primary text-white rounded-3xl w-[200px] h-[40px]`}
    >
      <div className="text-xs">{label}</div>
      {children}
    </button>
  );
};

export default MoojiioButton;
