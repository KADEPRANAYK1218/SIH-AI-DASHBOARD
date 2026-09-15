import React, { useState } from 'react';
import { 
  AlertTriangle, CloudRain, Wind, Eye, ArrowRight, 
  Crosshair, ShieldCheck, CloudSun, CheckCircle2, 
  Info, Check, X, Bell
} from 'lucide-react';

// 1. RECENT INCIDENTS WIDGET
export const RecentIncidentsWidget: React.FC<{ onSelectIncident?: (incident: any) => void }> = ({ onSelectIncident }) => {
  const [selectedIncident, setSelectedIncident] = useState<any | null>(null);

  const incidents = [
    {
      id: 'inc-1',
      time: '17:32',
      title: 'Drone detected - Sector 7 (J&K)',
      severity: 'HIGH',
      badgeClass: 'bg-red-950/80 border-red-500/80 text-red-300',
      icon: AlertTriangle,
      iconClass: 'text-red-400 fill-red-500/30'
    },
    {
      id: 'inc-2',
      time: '16:48',
      title: 'Unusual movement near LOC',
      severity: 'MEDIUM',
      badgeClass: 'bg-amber-950/80 border-amber-500/80 text-amber-300',
      icon: AlertTriangle,
      iconClass: 'text-amber-400 fill-amber-500/30'
    },
    {
      id: 'inc-3',
      time: '15:22',
      title: 'Fire in Sector 4 – Tank unit',
      severity: 'MEDIUM',
      badgeClass: 'bg-amber-950/80 border-amber-500/80 text-amber-300',
      icon: AlertTriangle,
      iconClass: 'text-amber-400 fill-amber-500/30'
    },
    {
      id: 'inc-4',
      time: '14:11',
      title: 'Weather alert – Heavy Rain (J&K)',
      severity: 'INFO',
      badgeClass: 'bg-cyan-950/80 border-cyan-500/80 text-cyan-300',
      icon: CloudRain,
      iconClass: 'text-cyan-400'
    },
    {
      id: 'inc-5',
      time: '12:03',
      title: 'Border intrusion attempt (Cancelled)',
      severity: 'RESOLVED',
      badgeClass: 'bg-emerald-950/80 border-emerald-500/80 text-emerald-300',
      icon: CheckCircle2,
      iconClass: 'text-emerald-400'
    }
  ];

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-cyan-500/25 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <h3 className="text-xs sm:text-sm font-tech font-bold text-white tracking-wider uppercase">
            RECENT INCIDENTS
          </h3>
        </div>

        <button
          onClick={() => setSelectedIncident(incidents[0])}
          className="text-xs font-mono-code text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Incident Rows */}
      <div className="space-y-1.5">
        {incidents.map(inc => {
          const Icon = inc.icon;
          return (
            <div
              key={inc.id}
              onClick={() => {
                setSelectedIncident(inc);
                onSelectIncident?.(inc);
              }}
              className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-slate-900/40 hover:bg-cyan-950/50 border border-transparent hover:border-cyan-500/30 transition cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[11px] font-mono-code text-slate-400 font-semibold shrink-0">
                  {inc.time}
                </span>
                <Icon className={`w-3.5 h-3.5 shrink-0 ${inc.iconClass}`} />
                <span className="text-[11px] font-tech text-slate-200 truncate group-hover:text-white">
                  {inc.title}
                </span>
              </div>

              {/* Status Badge */}
              <span className={`shrink-0 ml-2 px-2 py-0.5 rounded-full border text-[9px] font-mono-code font-bold ${inc.badgeClass}`}>
                {inc.severity}
              </span>
            </div>
          );
        })}
      </div>

      {/* Incident Details Modal */}
      {selectedIncident && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-slate-950 border border-cyan-500/40 rounded-2xl p-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedIncident(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-xl ${selectedIncident.badgeClass}`}>
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech font-bold text-white text-base">
                  {selectedIncident.title}
                </h4>
                <p className="text-xs font-mono-code text-slate-400">
                  Logged at {selectedIncident.time} • Priority: {selectedIncident.severity}
                </p>
              </div>
            </div>

            <p className="text-xs font-mono-code text-slate-300 p-3 rounded-lg bg-slate-900/80 border border-slate-800 leading-relaxed">
              Tactical incident verified by Tri-Service Automated Sensor Mesh. Forward patrol units notified; situational telemetry broadcast to Command Staff.
            </p>

            <button
              onClick={() => setSelectedIncident(null)}
              className="mt-4 w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-tech font-bold"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// 2. WEATHER & INTELLIGENCE WIDGET
export const WeatherIntelligenceWidget: React.FC = () => {
  return (
    <div className="rounded-2xl bg-slate-950/80 border border-cyan-500/25 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CloudRain className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs sm:text-sm font-tech font-bold text-white tracking-wider uppercase">
            WEATHER & INTELLIGENCE
          </h3>
        </div>

        <button className="text-xs font-mono-code text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition cursor-pointer">
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Weather Content */}
      <div className="flex items-center justify-between mt-1">
        {/* Left: Location & Temp */}
        <div>
          <div className="text-xs font-tech font-bold text-slate-300 flex items-center gap-1.5">
            <span>Srinagar, J&K</span>
            <span className="text-cyan-400">✈</span>
          </div>

          <div className="flex items-center gap-2 mt-1.5">
            {/* Sun behind cloud vector */}
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CloudSun className="w-6 h-6 text-amber-300" />
            </div>

            <div>
              <div className="text-xl font-tech font-bold text-white leading-none">
                11°C
              </div>
              <div className="text-[10px] font-mono-code text-slate-400 mt-0.5">
                Partly Cloudy
              </div>
            </div>
          </div>
        </div>

        {/* Right: Metrics */}
        <div className="text-[10.5px] font-mono-code space-y-1 text-slate-300">
          <div className="flex items-center justify-between gap-3">
            <span className="text-slate-400">⁘ Humidity</span>
            <span className="font-bold text-white">68%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-slate-400">÷ Wind</span>
            <span className="font-bold text-white">12 km/h</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-slate-400">⁘ Visibility</span>
            <span className="font-bold text-white">8 km</span>
          </div>
        </div>
      </div>

      {/* Advisory Pills */}
      <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-800/80">
        <div className="flex-1 py-1 px-1.5 rounded-lg bg-blue-950/40 border border-blue-500/40 text-blue-300 text-[9.5px] font-mono-code flex items-center justify-center gap-1">
          <CloudRain className="w-3 h-3 text-blue-400" />
          <span className="truncate">Rain Alert</span>
        </div>
        <div className="flex-1 py-1 px-1.5 rounded-lg bg-amber-950/40 border border-amber-500/40 text-amber-300 text-[9.5px] font-mono-code flex items-center justify-center gap-1">
          <Wind className="w-3 h-3 text-amber-400" />
          <span className="truncate">Wind Advisory</span>
        </div>
        <div className="flex-1 py-1 px-1.5 rounded-lg bg-slate-900/60 border border-slate-700 text-slate-300 text-[9.5px] font-mono-code flex items-center justify-center gap-1">
          <Eye className="w-3 h-3 text-slate-400" />
          <span className="truncate">Fog Alert</span>
        </div>
      </div>
    </div>
  );
};

// 3. MISSION STATUS WIDGET (4 Circular Progress Rings)
export const MissionStatusGauges: React.FC = () => {
  const missions = [
    { label: 'Active', value: 84, color: '#10B981', stroke: 'stroke-emerald-400' },
    { label: 'Pending', value: 12, color: '#06B6D4', stroke: 'stroke-cyan-400' },
    { label: 'Completed', value: 3, color: '#F59E0B', stroke: 'stroke-amber-400' },
    { label: 'Delayed', value: 1, color: '#EF4444', stroke: 'stroke-red-400' }
  ];

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-cyan-500/25 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Crosshair className="w-4 h-4 text-cyan-400" />
          <h3 className="text-xs sm:text-sm font-tech font-bold text-white tracking-wider uppercase">
            MISSION STATUS
          </h3>
        </div>

        <button className="text-xs font-mono-code text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition cursor-pointer">
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Circular Percentage Rings */}
      <div className="grid grid-cols-4 gap-2 pt-1">
        {missions.map(m => {
          const radius = 22;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (m.value / 100) * circumference;

          return (
            <div key={m.label} className="flex flex-col items-center text-center">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                  {/* Background Track */}
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3.5"
                  />
                  {/* Progress Arc */}
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke={m.color}
                    strokeWidth="3.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>

                {/* Center Percentage */}
                <div className="absolute inset-0 flex items-center justify-center text-xs font-tech font-bold text-white">
                  {m.value}%
                </div>
              </div>

              {/* Label */}
              <span className="text-[10px] font-mono-code text-slate-300 mt-1">
                {m.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 4. SYSTEM HEALTH WIDGET (4 Circular Gauges + Operational ECG Waveform)
export const SystemHealthGauges: React.FC = () => {
  const subsystems = [
    { label: 'Core System', value: 98, color: '#22D3EE' },
    { label: 'AI/ML Engine', value: 97, color: '#38BDF8' },
    { label: 'Database', value: 99, color: '#10B981' },
    { label: 'Network', value: 100, color: '#34D399' }
  ];

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-cyan-500/25 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs sm:text-sm font-tech font-bold text-white tracking-wider uppercase">
            SYSTEM HEALTH
          </h3>
        </div>

        <button className="text-xs font-mono-code text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition cursor-pointer">
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Circular Percentage Gauges */}
      <div className="grid grid-cols-4 gap-2 pt-1">
        {subsystems.map(sys => {
          const radius = 22;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (sys.value / 100) * circumference;

          return (
            <div key={sys.label} className="flex flex-col items-center text-center">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
                  {/* Background Track */}
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3.5"
                  />
                  {/* Progress Arc */}
                  <circle
                    cx="28"
                    cy="28"
                    r={radius}
                    fill="none"
                    stroke={sys.color}
                    strokeWidth="3.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>

                {/* Center Percentage */}
                <div className="absolute inset-0 flex items-center justify-center text-xs font-tech font-bold text-white">
                  {sys.value}%
                </div>
              </div>

              {/* Label */}
              <span className="text-[10px] font-mono-code text-slate-300 mt-1 truncate max-w-full">
                {sys.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Operational Pulse Line */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-2 text-[10.5px] font-mono-code text-emerald-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>All systems operational</span>
        </div>

        {/* Green ECG Waveform */}
        <svg className="w-16 h-4 text-emerald-400" viewBox="0 0 60 16" fill="none">
          <path
            d="M0 8 H15 L20 2 L25 14 L30 4 L35 10 L40 8 H60"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
