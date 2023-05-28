import { ReactNode } from "react";

interface MoojiioCardProps {
  children?: ReactNode;
  className?: string;
}

const MoojiioCard: React.FC<MoojiioCardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-white rounded-2xl border-2 border-custom-border`}
    >
      {children}
    </div>
  );
};

export default MoojiioCard;
