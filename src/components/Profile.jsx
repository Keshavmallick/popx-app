export default function Profile() {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
        <div className="absolute inset-x-0 top-0 h-10 bg-gray-50 border-b border-gray-100 rounded-t-xl px-6 flex items-center">
          <h2 className="text-xs font-medium text-gray-600">Account Settings</h2>
        </div>
  
        <div className="pt-12">
          <div className="flex items-center mb-3">
            <div className="relative mr-3">
              <img
                src="https://i.pravatar.cc/100?img=1"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="absolute -bottom-0.5 right-1 w-3.5 h-3.5 bg-purple-600 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-none">Marry Doe</p>
              <p className="text-[11px] text-gray-500 leading-none mt-1">Marry@Gmail.Com</p>
            </div>
          </div>
  
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-[11px] text-gray-600 leading-5">
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    );
  }
  