const ProfileBottomWidget = () => {
  return (
    <div className="grid grid-cols-2 mt-8 ">
      <div className="flex items-center">
        <div className="relative">
          <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
        </div>

        <p className="ml-2 text-gray-800 line-clamp-1">John Doe</p>
      </div>

      <div className="flex justify-end">
        <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
          <span className="text-sm uppercase">$</span>
          <span className="text-lg">3,200</span>/m
        </p>
      </div>
    </div>
  );
};

export default ProfileBottomWidget;
