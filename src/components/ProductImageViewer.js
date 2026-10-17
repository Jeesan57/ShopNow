'use client';

import { useEffect, useLayoutEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { FiX, FiZoomIn, FiZoomOut, FiChevronLeft, FiChevronRight, FiMaximize } from 'react-icons/fi';

export default function ProductImageViewer({ images, initialIndex = 0, name, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef(null);
  const viewportRef = useRef(null);
  const dragRef = useRef(null);
  const scrollRef = useRef(null);
  const titleId = useId();
  const helpId = useId();

  useEffect(() => {
    const opener = document.activeElement;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if(opener instanceof HTMLElement && opener.isConnected) opener.focus({preventScroll:true});
    };
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = scrollRef.current?.left ?? 0;
    viewport.scrollTop = scrollRef.current?.top ?? 0;
  }, [zoom, index]);

  function changeZoom(value) {
    const next = Math.max(1, Math.min(4, Math.round(value * 100) / 100));
    const viewport = viewportRef.current;
    if (viewport) scrollRef.current = {
      left: (viewport.scrollLeft + viewport.clientWidth / 2) * next / zoom - viewport.clientWidth / 2,
      top: (viewport.scrollTop + viewport.clientHeight / 2) * next / zoom - viewport.clientHeight / 2,
    };
    setZoom(next);
  }
  function changeImage(direction) {
    setIndex(value => (value + direction + images.length) % images.length);
    setZoom(1);
    scrollRef.current = null;
  }
  function handleKeys(event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); changeImage(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); changeImage(1); }
    if (['+','='].includes(event.key)) { event.preventDefault(); changeZoom(zoom + 0.5); }
    if (event.key === '-') { event.preventDefault(); changeZoom(zoom - 0.5); }
    if (event.key === '0') { event.preventDefault(); changeZoom(1); }
  }
  const control = 'w-11 h-11 shrink-0 inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-35 focus-visible:outline-2 focus-visible:outline-primary';
  return <dialog ref={dialogRef} aria-labelledby={titleId} aria-describedby={helpId} onCancel={event => { event.preventDefault(); onClose(); }} onKeyDown={handleKeys}
    onClick={event => { if(event.target !== event.currentTarget) return; const bounds = event.currentTarget.getBoundingClientRect(); if(event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose(); }}
    className="fixed inset-0 m-auto w-[96vw] max-w-[1400px] h-[92dvh] max-h-none p-0 rounded-xl border border-border bg-background text-foreground shadow-2xl backdrop:bg-black/75">
    <div className="h-full min-h-0 grid grid-rows-[auto_minmax(0,1fr)_auto]">
      <header className="flex items-center justify-between gap-3 p-3 border-b border-border">
        <div className="min-w-0"><h2 id={titleId} className="text-sm font-medium truncate">{name}</h2><p className="text-xs text-muted-foreground mt-1" aria-live="polite">Image {index + 1} of {images.length}</p></div>
        <button type="button" aria-label="Close image viewer" onClick={onClose} className={control} autoFocus><FiX className="w-5 h-5"/></button>
      </header>
      <div ref={viewportRef} data-image-viewport className={`min-h-0 min-w-0 overflow-auto overscroll-contain bg-muted ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
        onPointerDown={event => { if(zoom <= 1 || event.pointerType === 'touch' || event.button !== 0) return; const viewport = event.currentTarget; dragRef.current = {x:event.clientX,y:event.clientY,left:viewport.scrollLeft,top:viewport.scrollTop}; viewport.setPointerCapture(event.pointerId); }}
        onPointerMove={event => { const drag = dragRef.current; if(!drag) return; event.currentTarget.scrollLeft = drag.left - (event.clientX - drag.x); event.currentTarget.scrollTop = drag.top - (event.clientY - drag.y); }}
        onPointerUp={() => {dragRef.current = null;}} onPointerCancel={() => {dragRef.current = null;}} onLostPointerCapture={() => {dragRef.current = null;}}>
        <div className="relative select-none" style={{width:`${zoom * 100}%`,height:`${zoom * 100}%`}}>
          <Image src={images[index]} alt={`${name}, image ${index + 1}`} fill unoptimized sizes="96vw" draggable={false} className="object-contain pointer-events-none"/>
        </div>
      </div>
      <footer className="border-t border-border p-3">
        <div className="flex items-center justify-center gap-2">
          {images.length > 1 && <button type="button" aria-label="Previous enlarged image" onClick={() => changeImage(-1)} className={control}><FiChevronLeft/></button>}
          <button type="button" aria-label="Zoom out" disabled={zoom <= 1} onClick={() => changeZoom(zoom - 0.5)} className={control}><FiZoomOut/></button>
          <output aria-label="Image zoom" aria-live="polite" className="text-xs tabular-nums min-w-11 text-center">{Math.round(zoom * 100)}%</output>
          <button type="button" aria-label="Zoom in" disabled={zoom >= 4} onClick={() => changeZoom(zoom + 0.5)} className={control}><FiZoomIn/></button>
          <button type="button" aria-label="Reset image zoom" disabled={zoom === 1} onClick={() => changeZoom(1)} className={control}><FiMaximize/></button>
          {images.length > 1 && <button type="button" aria-label="Next enlarged image" onClick={() => changeImage(1)} className={control}><FiChevronRight/></button>}
        </div>
        <p id={helpId} className="text-[11px] text-muted-foreground text-center mt-2">Zoom in to inspect details. Drag or swipe to move around. Press Esc to close.</p>
      </footer>
    </div>
  </dialog>;
}
