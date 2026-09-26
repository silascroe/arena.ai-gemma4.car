import React from 'react';

export const ControlsGuide = () => {
  return (
    <div className="absolute bottom-8 left-8 text-white/50 font-mono text-xs pointer-events-none flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-white/10 rounded border border-white/20">LMB</span>
        <span>Rotate View</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-white/10 rounded border border-white/20">Scroll</span>
        <span>Zoom In/Out</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 bg-white/10 rounded border border-white/20">RMB</span>
        <span>Pan</span>
      </div>
    </div>
  );
};
