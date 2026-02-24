import { useState } from 'react';
import AccountType from '../components/steps/AccountType';
import MobileNumberInput from '../components/steps/MobileNumberInput';
import avatar from '../assets/avatar.png';
import SuccessModal from '../components/steps/SuccessModal';
import MobileOtp from '../components/steps/MobileOtp';
import ResetPassword from '../components/steps/ResetPassword';
import FullNameInput from '../components/steps/FullNameInput';
import { STEPS } from '../utility/Steps';

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.ACCOUNT_TYPE);

  const handleNext = () => {
    if (currentStep < STEPS.SUCCESS) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > STEPS.ACCOUNT_TYPE) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 lg:p-12 font-sans">
      <div className="bg-white flex w-full max-w-300 min-h-187.5 overflow-hidden shadow-2xl relative">
        <div className="hidden lg:flex flex-[0.85] flex-col p-16 relative z-10">
          <div className="animate-in fade-in slide-in-from-left-6 duration-700">
            <p className="text-[#132C4A] text-lg font-normal opacity-70">Let's get started</p>
            <h1 className="text-[45px] font-bold text-[#132C4A] leading-[1.1] mt-2">
              Create your account
            </h1>
            <p className="mt-4 text-[#132C4A] text-base opacity-80">
              Follow the steps to create your account
            </p>
          </div>
          <div className="mt-auto flex justify-center animate-in zoom-in duration-1000">
            <img src={avatar} alt='avatar' className="w-full max-w-105 object-contain" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center lg:p-10 bg-[#f8fafc]/50 relative z-10">
          <div className="bg-white w-full max-w-130 min-h-155 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 p-8 lg:p-10 flex flex-col relative overflow-hidden">
            {currentStep > 1 && currentStep < STEPS.SUCCESS && (
              <div className="absolute top-0 left-10 right-10">
                <div className="w-full h-0.75 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0054FD] transition-all duration-700 ease-in-out"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>)}

            <div className={`flex-1 flex flex-col`}>
              <div key={currentStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
                {currentStep === STEPS.ACCOUNT_TYPE && <AccountType />}
                {currentStep === STEPS.NAME_INPUT && <MobileNumberInput />}
                {currentStep === STEPS.MOBILE_OTP && <MobileOtp />}
                {currentStep === STEPS.ENTER_FULL_NAME && <FullNameInput />}
                {currentStep === STEPS.PASSWORD_SET && <ResetPassword />}
              </div>
            </div>

            {currentStep < STEPS.SUCCESS && (
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleBack}
                  disabled={currentStep === STEPS.ACCOUNT_TYPE}
                  className={`flex-1 h-12 rounded-full font-medium text-sm transition-all border cursor-pointer
                    ${currentStep === STEPS.ACCOUNT_TYPE
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                      : 'border-slate-200 text-[#0054FD] hover:bg-slate-50 active:scale-95'}`}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 h-12 bg-[#0054FD] hover:bg-[#0046d5] text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-blue-100 active:scale-95 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {currentStep === STEPS.SUCCESS && <SuccessModal />}
    </div>
  );
};

export default RegistrationFlow;