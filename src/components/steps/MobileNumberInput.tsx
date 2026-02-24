const MobileNumberInput = () => {
  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-[24px] font-medium text-[#132C4A] mb-8">
        OTP Verification
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-normal text-[#8292A1] tracking-wider">
            Mobile Number<span className='text-red-500'>*</span>
          </label>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-3 py-3.5 border border-slate-200 rounded-xl bg-white text-[#132C4A] min-w-25 cursor-pointer hover:border-blue-500 transition-colors">
              <span className="text-lg">🇺🇸</span>
              <span className="text-sm font-bold">+1</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex-1 relative">
              <input
                type="tel"
                placeholder="8343989239"
                className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-[#132C4A] font-medium placeholder:text-slate-300 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNumberInput;