import Layout from "@/components/UI/layouts";
import LayoutCardsGrid from "@/components/UI/layouts/LayoutCardGrid";
import MoojiioCard from "@/components/UI/card/MoojiioCard";
import MoojiioCheckbox from "@/components/UI/checkbox/MoojiioCheckBox";
import { useState } from "react";
import MoojiioButton from "@/components/UI/button/MoojiioButton";

interface CheckboxItem {
  id: number;
  title: string;
  subtitle: string;
  recomendation: number;
  checked: boolean;
}

export default function Home() {
  // Need to call an API for this data
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    {
      id: 1,
      title: "Feedback",
      subtitle:
        "Giving and receiving specific actionable advice that helps to grow.",
      recomendation: 0,
      checked: false,
    },
    {
      id: 2,
      title: "Delegating Effectively",
      subtitle:
        "Effective task distribution that leads to increased performance and engagement.",
      recomendation: 3,
      checked: true,
    },
    {
      id: 3,
      title: "Emotional Intelligence",
      subtitle:
        "The ability to understand and manage own’s and other’s emotions in order to build effective relationships.",
      recomendation: 0,
      checked: false,
    },
    {
      id: 4,
      title: "Psychological Safety",
      subtitle:
        "The shared belief that it’s safe to take speak up, ask for help and take risks.",
      recomendation: 1,
      checked: false,
    },
    {
      id: 5,
      title: "Goal Setting",
      subtitle:
        "The capability to define and share clear, measurable, time-bound goals.",
      recomendation: 0,
      checked: true,
    },
    // Add more checkbox objects as needed
  ]);

  //   Check box function to change and updated the data
  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <Layout>
      <LayoutCardsGrid className="flex justify-center">
        <MoojiioCard className="w-11/12 h-[80vh] grid md:w-6/12 p-2 md:p-10 overflow-auto">
          {/* Title and text  */}
          <div className="flex flex-col items-center not-italic font-medium  text-lg md:text-2xl text-center text-gray-800">
            <div>You can choose Focus Areas</div>
            <div className="flex flex-wrap justify-center">
              <div className="text-yellow-600 mr-1 whitespace-nowrap">
                based on feedback
              </div>
              <div className="whitespace-nowrap">from your peers</div>
            </div>
            <div className="not-italic font-normal text-xs md:text-sm text-center text-gray-600">
              Your team wants you to improve in the below areas. Select up to 3.
            </div>

            {/* Checkboxs */}
            <div className="mt-2">
              {checkboxes.map((checkbox) => (
                <MoojiioCheckbox
                  key={checkbox.id}
                  title={checkbox.title}
                  subtitle={checkbox.subtitle}
                  checked={checkbox.checked}
                  recomendation={checkbox.recomendation}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
              ))}
            </div>

            {/* Button for redirection */}
            <MoojiioButton
              onClick={() => {}}
              label="Set my focus areas"
              classNames="mt-2"
            />
          </div>
        </MoojiioCard>
      </LayoutCardsGrid>
    </Layout>
  );
}
