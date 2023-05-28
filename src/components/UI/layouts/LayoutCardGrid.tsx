import { ReactNode } from "react";

interface LayoutCardsGridProps {
  children?: ReactNode;
  className?: string;
}

const LayoutCardsGrid: React.FC<LayoutCardsGridProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className={`${className} w-11/12 h-[80vh]`}>{children}</div>
    </div>
  );
};

export default LayoutCardsGrid;
