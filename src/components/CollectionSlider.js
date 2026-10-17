'use client';

import { Children, cloneElement, isValidElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export default function CollectionSlider({ count, children, variant = 'categories', label }) {
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const offsetRef = useRef(0);
  const cycleRef = useRef(0);
  const motionRef = useRef(null);
  const featured = variant === 'products';
  const [overflowing, setOverflowing] = useState(false);
  const slider = featured ? count > 1 && overflowing : count >= 5;
  const cardClass = featured ? 'home-featured-card' : 'home-category-card';
  const noun = featured ? 'products' : 'categories';
  useEffect(() => {
    if(!featured) return;
    const track = trackRef.current;
    if(!track) return;
    function measure() {
      const card = track.querySelector('.home-featured-card');
      const width = card?.getBoundingClientRect().width || 0;
      const next = width * count + Math.max(0,count - 1) * 24 > track.clientWidth + 1;
      setOverflowing(previous => previous === next ? previous : next);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    const frame = requestAnimationFrame(measure);
    return () => {observer.disconnect();cancelAnimationFrame(frame);};
  }, [featured,count]);
  useLayoutEffect(() => {
    trackRef.current?.querySelectorAll('[data-slider-copy] a, [data-slider-copy] button, [data-slider-copy] input, [data-slider-copy] select, [data-slider-copy] textarea, [data-slider-copy] [tabindex]').forEach(control => {control.tabIndex = -1;});
  });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);

  useLayoutEffect(() => {
    if (!slider) return;
    function measure() {
      const cycle = (setRef.current?.getBoundingClientRect().width || 0) + 24;
      const phase = cycleRef.current ? ((offsetRef.current % cycleRef.current) + cycleRef.current) % cycleRef.current / cycleRef.current : 0;
      cycleRef.current = cycle;
      offsetRef.current = cycle + phase * cycle;
      motionRef.current = null;
      if(trackRef.current) trackRef.current.scrollLeft = offsetRef.current;
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(setRef.current);
    return () => {observer.disconnect();cycleRef.current = 0;};
  }, [slider,count]);

  useEffect(() => {
    if (!slider || hovered || focused || touching) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let previous;
    function animate(time) {
      const elapsed = previous === undefined ? 0 : Math.min(time - previous,64);
      previous = time;
      const track = trackRef.current;
      const cycle = cycleRef.current;
      if (track && cycle && !document.hidden) {
        const bounds = track.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
          const motion = motionRef.current;
          if(motion) {
            motion.elapsed += elapsed;
            const progress = Math.min(1,motion.elapsed / 550);
            const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
            offsetRef.current = motion.from + motion.distance * eased;
            if(progress === 1) motionRef.current = null;
          } else if(!reducedMotion.matches) {
            offsetRef.current += elapsed * 0.03;
          }
          const normalized = cycle + ((offsetRef.current % cycle) + cycle) % cycle;
          if(motionRef.current) motionRef.current.from += normalized - offsetRef.current;
          offsetRef.current = normalized;
          track.scrollLeft = normalized;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [slider, count, hovered, focused, touching]);

  function syncScroll() {
    if(!touching && !focused && !hovered) return;
    const track = trackRef.current, cycle = cycleRef.current;
    if(!track || !cycle) return;
    const normalized = cycle + ((track.scrollLeft % cycle) + cycle) % cycle;
    offsetRef.current = normalized;
    motionRef.current = null;
    if(Math.abs(track.scrollLeft - normalized) > 1) track.scrollLeft = normalized;
  }
  function slide(direction) {
    const track = trackRef.current, cycle = cycleRef.current;
    if (!track || !cycle) return;
    const distance = direction * ((setRef.current?.firstElementChild?.getBoundingClientRect().width || 284) + 24);
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      offsetRef.current = cycle + ((offsetRef.current + distance) % cycle + cycle) % cycle;
      motionRef.current = null;
      track.scrollLeft = offsetRef.current;
    } else {
      motionRef.current = {from:offsetRef.current,distance,elapsed:0};
    }
  }
  function isCard(target) {return target instanceof Element && Boolean(target.closest(`.${cardClass}`));}
  const copies = () => Children.map(children,child => isValidElement(child) ? cloneElement(child,{tabIndex:-1}) : child);
  const control = 'w-11 h-11 shrink-0 rounded-full border border-border bg-card inline-flex items-center justify-center hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary';
  return <div role="region" aria-label={label || (featured ? 'Featured products' : 'Product categories')} aria-roledescription={slider ? 'slider' : undefined}
    onPointerOver={event => {if(event.pointerType === 'mouse')setHovered(isCard(event.target));}}
    onPointerOut={event => {if(event.pointerType === 'mouse')setHovered(isCard(event.relatedTarget) && event.currentTarget.contains(event.relatedTarget));}}
    onFocusCapture={event => setFocused(isCard(event.target))} onBlurCapture={event => setFocused(isCard(event.relatedTarget) && event.currentTarget.contains(event.relatedTarget))}
    onPointerDown={event => {if(event.pointerType === 'touch')setTouching(true);}} onPointerUp={() => setTouching(false)} onPointerCancel={() => setTouching(false)}>
    <div ref={trackRef} data-collection-track data-category-track={featured ? undefined : true} className={`home-category-track ${featured ? 'home-featured-track' : ''} ${slider ? 'is-slider' : ''}`} onScroll={syncScroll}>
      {slider ? <>
        <div className="home-category-set" data-slider-copy aria-hidden="true">{copies()}</div>
        <div ref={setRef} data-collection-set data-category-set={featured ? undefined : true} className="home-category-set">{children}</div>
        <div className="home-category-set" data-slider-copy aria-hidden="true">{copies()}</div>
      </> : children}
    </div>
    {slider && <div className="flex items-center justify-center gap-3 mt-4">
      <button type="button" aria-label={`Slide ${noun} left`} title="Slide left" onClick={() => slide(1)} className={control}><FiArrowLeft aria-hidden="true"/></button>
      <span className="text-xs text-muted-foreground">{count} {noun}</span>
      <button type="button" aria-label={`Slide ${noun} right`} title="Slide right" onClick={() => slide(-1)} className={control}><FiArrowRight aria-hidden="true"/></button>
    </div>}
  </div>;
}
