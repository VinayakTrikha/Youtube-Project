import Button from "./Button";

const ButtonList = () => {
  const buttonsList = [
    "All",
    "Gaming",
    "Songs",
    "Cooking",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Calesthenics",
    "Cricket",
    "Others",
  ];
  return (
    <div className="flex">
      {buttonsList.map((btn,index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
