import { useState } from 'react';

const MobileOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-[24px] font-medium text-[#132C4A] mb-8">
        OTP Verification
      </h2>
      <p className="text-xs text-[#8292A1] mb-2 font-normal">
        An OTP has been sent to your mobile number
      </p>
      <div className="max-w-95">
        <div className="flex justify-between gap-12 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-14 h-14 text-center text-xl font-bold border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              value={digit}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[index] = e.target.value;
                setOtp(newOtp);
              }}
            />
          ))}
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 font-normal">
            Did not receive OTP? <span className="text-blue-600 font-semibold cursor-pointer">Resend OTP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileOtp;