export const Header = ({ mainText, subText }) => {
  return (
    <div className="flex place-items-center flex-col my-4">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {mainText}
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {subText}
      </p>
    </div>
  );
};
