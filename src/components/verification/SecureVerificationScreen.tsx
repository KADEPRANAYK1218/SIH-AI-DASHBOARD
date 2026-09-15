import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShieldCheck, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { UserAccount, AuthFactorStatus } from '../../types';
import { VajraLogo } from '../branding/VajraLogo';

interface SecureVerificationScreenProps {
  user: UserAccount;
  authFactors: AuthFactorStatus;
  onComplete: () => void;
}

export const SecureVerificationScreen: React.FC<SecureVerificationScreenProps> = ({
  user,
  authFactors,
  onComplete
}) => {
  const [completedIndex, setCompletedIndex] = useState<number>(0);
  const [isGranted, setIsGranted] = useState<boolean>(false);
  const hasCompletedRef = useRef<boolean>(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const verificationChecklist = [
    { num: '01', title: 'CREDENTIALS & SERVICE ID MATCH', factor: authFactors.serviceId && authFactors.password && authFactors.pin },
    { num: '02', title: 'SERVICE & ECHELON RANK AUTHORIZATION', factor: authFactors.service && authFactors.rank },
    { num: '03', title: 'IRIS OPTICAL VECTOR VERIFICATION', factor: authFactors.iris },
    { num: '04', title: '3D FACIAL DEPTH LANDMARK MATCH', factor: authFactors.face },
    { num: '05', title: 'ACOUSTIC SPECTRAL PASSPHRASE DECODE', factor: authFactors.voice },
    { num: '06', title: 'CLEARANCE LEVEL & SECTOR PERMISSIONS', factor: authFactors.permissions },
    { num: '07', title: 'VAJRA GEOCORE SECURE SESSION INIT', factor: true }
  ];

  useEffect(() => {
    const total = verificationChecklist.length;
    const interval = setInterval(() => {
      setCompletedIndex(prev => {
        if (prev < total) {
          return prev + 1;
        } else {
          clearInterval(interval);
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            setIsGranted(true);
            setTimeout(() => {
              onCompleteRef.current();
            }, 1200);
          }
          return prev;
        }
      });
    }, 280);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A14] overflow-hidden" id="secure-verification-screen">
      {/* Background Ambience & Glowing Chakras */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,28,61,0.8)_0%,rgba(5,10,20,0.98)_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-500/10 animate-radar pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-amber-500/10 pointer-events-none" />

      {/* Center Tactical Card */}
      <div className="vajra-panel-elevated relative z-10 max-w-xl w-full rounded-2xl p-8 border border-cyan-500/40 shadow-2xl">
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <VajraLogo size="lg" animated={true} />
          <div className="mt-4 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-tech text-cyan-300">
            VAJRA SECURE VERIFICATION SEQUENCE
          </div>
        </div>

        {/* 7-Point Factor Matrix */}
        <div className="space-y-2.5 my-6">
          {verificationChecklist.map((item, idx) => {
            const isDone = idx < completedIndex;
            const isCurrent = idx === completedIndex;

            return (
              <div
                key={item.num}
                className={`flex items-center justify-between p-2.5 rounded-lg border transition-all duration-300 ${
                  isDone
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                    : isCurrent
                    ? 'bg-cyan-950/40 border-cyan-500/50 text-cyan-200 animate-pulse'
                    : 'bg-slate-900/30 border-slate-800 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono-code font-bold text-xs text-slate-400">
                    {item.num}
                  </span>
                  <span className="font-tech text-xs tracking-wider">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {isDone ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 font-mono-code">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      PASSED
                    </span>
                  ) : isCurrent ? (
                    <div className="w-3.5 h-3.5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span className="text-xs font-mono-code text-slate-600">PENDING</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Status */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          {isGranted ? (
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 border border-emerald-500/50 shadow-lg shadow-emerald-500/20 animate-fade-in">
              <div className="text-base font-display font-black text-emerald-300 tracking-widest flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>VAJRA ACCESS GRANTED</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-xs font-tech text-emerald-200/80 mt-1">
                ENTERING BHARAT COMMAND GEOSPATIAL MATRIX...
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-xs font-tech text-cyan-300/80">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>INITIALIZING SECURE SESSION FOR OFFICER {user.serviceId}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
