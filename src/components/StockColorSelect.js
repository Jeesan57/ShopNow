'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { colorHex } from '../lib/productColors';

export default function StockColorSelect({ colors, value, onChange, label, disabled }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const trigger = useRef(null), menu = useRef(null);
  const id = useId();
  const options = ['', ...colors];
  useEffect(() => {
    if (!open) return;
    function place() {
      const rect = trigger.current.getBoundingClientRect();
      const height = Math.min(248, window.innerHeight - 24);
      const above = window.innerHeight - rect.bottom < height + 8 && rect.top > height;
      setPosition({ left: Math.max(8, Math.min(rect.left, window.innerWidth - Math.max(rect.width, 180) - 8)), top: above ? rect.top - height - 4 : rect.bottom + 4, width: Math.min(Math.max(rect.width, 180), window.innerWidth - 16), maxHeight: above ? height : Math.max(100, Math.min(height, window.innerHeight - rect.bottom - 12)) });
    }
    function outside(event) {
      if (!trigger.current?.contains(event.target) && !menu.current?.contains(event.target)) setOpen(false);
    }
    place();
    document.addEventListener('pointerdown', outside);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { document.removeEventListener('pointerdown', outside); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [open]);
  const positioned = Boolean(position);
  useEffect(() => {
    if (open && positioned) menu.current?.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
  }, [open, positioned]);
  function choose(color) { onChange(color); setOpen(false); trigger.current?.focus(); }
  function keys(event) {
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); trigger.current?.focus(); return; }
    if (event.key === 'Tab') { setOpen(false); trigger.current?.focus(); return; }
    const controls = Array.from(menu.current?.querySelectorAll('[role="option"]') || []);
    const index = controls.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % controls.length;
    if (event.key === 'ArrowUp') next = (index - 1 + controls.length) % controls.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = controls.length - 1;
    if (next !== undefined) { event.preventDefault(); controls[next]?.focus(); }
  }
  return <>
    <button ref={trigger} type="button" className="stock-color-trigger" disabled={disabled} aria-label={`${label}: ${value || 'Select color'}`} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? id : undefined} onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); } }}>
      {value && <span className="stock-color-dot" aria-hidden="true" style={{ backgroundColor: colorHex(value) }}/>}<span>{value || 'Select color'}</span><FiChevronDown aria-hidden="true"/>
    </button>
    {open && position && !disabled && createPortal(<div ref={menu} id={id} className="stock-color-menu" role="listbox" aria-label={label} style={position} onKeyDown={keys}>
      {options.map(color => <button type="button" key={color} role="option" aria-selected={value === color} tabIndex={-1} onClick={() => choose(color)}>
        {color ? <span className="stock-color-dot" aria-hidden="true" style={{ backgroundColor: colorHex(color) }}/> : <span className="stock-color-dot is-clear" aria-hidden="true"/>}<span>{color || 'No color'}</span>{value === color && <FiCheck aria-hidden="true"/>}
      </button>)}
    </div>, document.body)}
  </>;
}
