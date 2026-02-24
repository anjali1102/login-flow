import { useState } from 'react';

const AccountType = () => {
  const [selected, setSelected] = useState<'Personal' | 'Business'>('Personal');

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-[22px] text-slate-700 mb-12 leading-tight">
        To join us tell us <span className="font-bold text-slate-900">what type of account</span> you are opening
      </h2>
      <div className="space-y-3">
        {['Personal', 'Business'].map((type) => (
          <button
            key={type}
            onClick={() => setSelected(type as any)}
            className={`w-full flex items-center p-2 rounded-2xl border transition-all duration-200 text-left cursor-pointer
              ${selected === type ? 'border-[#0054FD] bg-white shadow-sm' : 'border-slate-100 bg-white'}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3
              ${selected === type ? 'text-[#0054FD]' : 'text-slate-400'}`}>
              {type === 'Personal' ? (
                <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              ) : (
                <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              )}
            </div>
            <span className={`flex-1 text-base font-semibold ${selected === type ? 'text-[#0054FD]' : 'text-slate-700'}`}>
              {type}
            </span>
            {selected === type && (
              <div className="w-6 h-6 bg-[#0054FD] rounded-full flex items-center justify-center">
                <svg width="12" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div >
  );
};

export default AccountType;