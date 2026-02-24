import circleTick from '../../assets/circleTick.png';
import shield from '../../assets/shield.png';

const SuccessModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex justify-center mb-2">
          <div className="w-14 h-14 rounded-full border-blue-600 flex items-center justify-center text-blue-600">
            <img src={circleTick} alt='tick icon' />
          </div>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-[#1e293b]">You're all set!</h2>
          <p className="text-slate-400 text-sm mt-2">Here's a quick summary of your account details</p>
        </div>
        <div className="bg-[#f8fafc] rounded-3xl p-6 mb-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-[13px] font-medium">Account Type</span>
            <span className="font-bold text-slate-800 text-[13px]">Personal</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-[13px] font-medium">Email</span>
            <span className="font-bold text-slate-800 text-[13px]">jo••••@example.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-[13px] font-medium">Name</span>
            <span className="font-bold text-slate-800 text-[13px]">John Doe</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-[13px] font-medium">Mobile Number</span>
            <span className="font-bold text-slate-800 text-[13px]">9711677290</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={shield} alt='shield icon' />
          <span className="text-[11px] font-semibold text-slate-400">Your account is secured with bank-grade security</span>
        </div>
        <button className="flex items-center justify-center w-64 h-14 mx-auto bg-[#0054FD] hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-100 active:scale-95">
          Go To Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;