const FullNameInput = () => {
    return (
        <div className="animate-in fade-in duration-300">
            <h2 className="text-[22px] font-semibold text-[#132C4A] mb-8">
                What is your name?
            </h2>
            <div className="space-y-6">
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-sans text-slate-400 tracking-wider ml-3">
                        First Name
                    </label>
                    <div className="relative">
                        <input
                            type={"text"}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-200"
                            placeholder="First Name"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                        >
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-sans text-slate-400 tracking-wider ml-3">
                        Last Name
                    </label>
                    <div className="relative">
                        <input
                            type={"text"}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-200"
                            placeholder="Last Name"
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                        >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullNameInput