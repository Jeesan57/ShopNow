'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiUploadCloud } from 'react-icons/fi';

export default function AdminCategoryImage({ image, busy, label, onUpload }) {
  const [preview, setPreview] = useState('');
  const previewUrl = useRef('');
  useEffect(() => () => URL.revokeObjectURL(previewUrl.current), []);
  async function choose(event) {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const valid = ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 5242880;
    if (valid) {
      previewUrl.current = URL.createObjectURL(file);
      setPreview(previewUrl.current);
    }
    try { await onUpload(file); }
    finally {
      URL.revokeObjectURL(previewUrl.current);
      previewUrl.current = '';
      setPreview('');
    }
  }
  return <label className={`category-image-picker ${busy ? 'is-busy' : ''}`}>
    <span className="category-image-preview">
      {(preview || image) ? <Image src={preview || image} alt={label} fill sizes="280px" unoptimized={Boolean(preview)} className="object-cover" /> : <FiUploadCloud aria-hidden="true" />}
      {preview && <span className="category-image-progress" role="status">Uploading…</span>}
    </span>
    <span className="category-image-caption">{image ? 'Change image' : 'Upload cover image'} <small>JPEG, PNG or WebP · up to 5 MB</small></span>
    <input type="file" accept="image/jpeg,image/png,image/webp" aria-label={label} disabled={busy} onChange={choose}/>
  </label>;
}
