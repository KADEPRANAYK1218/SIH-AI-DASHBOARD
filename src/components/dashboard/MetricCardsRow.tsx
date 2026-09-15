import React, { useState, useEffect } from 'react';
import { 
  SoldierIcon, 
  CctvIcon, 
  TargetMissionIcon, 
  TankIcon, 
  ArtilleryGunIcon, 
  DroneIcon, 
  TacticalClockIcon 
} from './TacticalIcons';

export const MetricCardsRow: React.FC = () => {
  // Clock state for Srinagar, J&K Time Card
  const [srinagarTime, setSrinagarTime] = useState<string>('11:42 AM');
  const [currentDate, setCurrentDate] = useState<string>('18 Apr 2025');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setSrinagarTime(timeStr);
      const dateStr = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      setCurrentDate(dateStr);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="w-full rounded-2xl p-2 sm:p-2.5 bg-[#020b1c]/95 border border-[#0055ff]/50 shadow-[0_0_25px_rgba(0,85,255,0.2)] select-none"
      id="vajra-metric-kpi-row"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-2 sm:gap-2.5 w-full">
        {/* 1. TOTAL SOLDIERS */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 rounded-full border border-cyan-400/60 bg-[#02182b] flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            <SoldierIcon size={26} className="text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              TOTAL SOLDIERS
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              18,750
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>2.4%</span>
            </div>
          </div>
        </div>

        {/* 2. TOTAL CCTV */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 flex items-center justify-center text-cyan-400 shrink-0 drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
            <CctvIcon size={34} className="text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              TOTAL CCTV
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              386
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>5.2%</span>
            </div>
          </div>
        </div>

        {/* 3. TOTAL MISSIONS */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 rounded-full border border-amber-400/60 bg-[#241300]/90 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
            <TargetMissionIcon size={24} className="text-amber-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              TOTAL MISSIONS
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              128
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>1.6%</span>
            </div>
          </div>
        </div>

        {/* 4. FIRE TANKS */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 flex items-center justify-center text-[#00e676] shrink-0 drop-shadow-[0_0_12px_rgba(0,230,118,0.45)]">
            <TankIcon size={34} className="text-[#00e676]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              FIRE TANKS
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              54
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>3.8%</span>
            </div>
          </div>
        </div>

        {/* 5. MISSION GUNS */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 flex items-center justify-center text-[#ffca28] shrink-0 drop-shadow-[0_0_12px_rgba(255,202,40,0.45)]">
            <ArtilleryGunIcon size={34} className="text-[#ffca28]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              MISSION GUNS
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              112
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>4.5%</span>
            </div>
          </div>
        </div>

        {/* 6. DRONES */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 flex items-center justify-center text-cyan-400 shrink-0 drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
            <DroneIcon size={34} className="text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              DRONES
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5">
              63
            </div>
            <div className="flex items-center gap-1 text-xs font-mono-code font-bold text-[#00e676] mt-1 leading-none">
              <span>▲</span>
              <span>7.1%</span>
            </div>
          </div>
        </div>

        {/* 7. SRINAGAR, J&K TIME */}
        <div className="relative rounded-xl p-3 bg-[#030d22] border border-[#0055ff]/40 hover:border-[#0099ff]/80 transition flex items-center gap-3 shadow-md">
          <div className="w-11 h-11 flex items-center justify-center text-cyan-400 shrink-0 drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]">
            <TacticalClockIcon size={34} className="text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] font-mono-code font-bold tracking-wider text-slate-300 uppercase leading-none">
              SRINAGAR, J&K TIME
            </div>
            <div className="text-2xl font-tech font-bold text-white tracking-tight leading-none mt-1.5 whitespace-nowrap">
              {srinagarTime}
            </div>
            <div className="text-xs font-mono-code font-medium text-slate-300 mt-1 leading-none whitespace-nowrap">
              {currentDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
