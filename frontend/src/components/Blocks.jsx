const shortenText = (text, n) => {
  if (text.length > n) {
    const shortenedText = text.substring(0, n).concat("...");
    return shortenedText;
  }
  return text;
};
export const SimpleBlock = ({ heading, text }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-8">
      <h3 className="text-xl text-red-900">{heading}</h3>
      <p className="text-base md:text-lg text-blue-900">{text}</p>
    </div>
  );
};

export const MinistryBlock = ({ image, heading, verse, text }) => {
  return (
    <div className="flex flex-col justify-between items-start gap-4 md:gap-8 text-left w-full basis-full md:basis-2/4 lg:basis-1/3 shrink-0 grow-0 snap-start rounded-lg overflow-hidden border-gray-300 border bg-blue-950 text-white">
      <div className="h-80 bg-white w-full">
        {image ? (
          <img src={image} alt={heading} className="w-full h-full" />
        ) : (
          ""
        )}
      </div>
      <div className="px-4 pb-2 flex flex-col gap-4 justify-start items-start h-2/3 md:h-3/4">
        <h2 className="text-xl w-full text-center">{heading}</h2>
        <p className="lg:text-base text-xs sm:text-sm leading-5 italic">
          {verse}
        </p>
        <p className="lg:text-lg text-sm sm:text-base">{text}</p>
      </div>
    </div>
  );
};
export const EventBlock = ({ image, heading, text }) => {
  return (
    <div className="event animate__animated animate__fadeInUp">
      <div className="h-80 w-full">
        <img src={image} alt={heading} className="w-full h-full" />
      </div>
      <div className="h-40 w-full">
        <h2 className="text-xl w-full">{heading}</h2>
        <p className="lg:text-lg text-sm sm:text-base">{text}</p>
      </div>
    </div>
  );
};
export const PhotoBlock = ({ image, title }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="h-60 w-60">
        <img src={image} alt={title} className="w-full h-full" title={title} />
      </div>
      <p className="text-base mt-3 text-center w-full">
        {shortenText(title, 25)}
      </p>
    </div>
  );
};

export const InfoBlock = ({ color, title, number }) => {
  return (
    <div
      className={`${color} p-4 rounded-md w-full md:w-60 animate__animated animate__lightSpeedInRight`}
    >
      <h2 className="text-xl text-white">{title}</h2>
      <p className="text-base text-white">{number}</p>
    </div>
  );
};

// export const InfoBlock = ({ color, icon, title, number }) => {
//   return (
//     <div
//       className={`flex flex-row items-center justify-start gap-4 ${color} p-4 rounded-md w-full md:w-60`}
//     >
//       <div>{icon}</div>
//       <div>
//         <h2 className="text-xl text-white">{title}</h2>
//         <p className="text-base text-white">{number}</p>
//       </div>
//     </div>
//   );
// };

