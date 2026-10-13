'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiUploadCloud, FiX, FiStar } from 'react-icons/fi';

export default function AdminProductImages({ images, busy, onUpload, onChange }) {
  const [previews, setPreviews] = useState([]);
  const previewUrls = useRef([]);
  useEffect(() => () => previewUrls.current.forEach(url => URL.revokeObjectURL(url)), []);
  async function chooseFiles(event) {
    const files = Array.from(event.target.files || []);
    event.target.value = '';
    if (!files.length) return;
    const pending = files.map(file => ({ name: file.name, url: URL.createObjectURL(file) }));
    previewUrls.current = pending.map(file => file.url);
    setPreviews(pending);
    try { await onUpload(files); }
    finally {
      previewUrls.current.forEach(url => URL.revokeObjectURL(url));
      previewUrls.current = [];
      setPreviews([]);
    }
  }
  return <fieldset className="admin-product-images" disabled={busy}>
    <legend>Product images</legend>
    <p>The first image is primary. Add front, back, and detail photos.</p>
    <label className={`admin-image-upload ${busy ? 'uploading' : ''}`}>
      <FiUploadCloud aria-hidden="true" />
      <span>{busy ? 'Uploading images…' : 'Choose images'}</span>
      <small>Select multiple JPEG, PNG, or WebP files · up to 5 MB each</small>
      <input type="file" multiple accept="image/jpeg,image/png,image/webp" aria-label="Upload product images" onChange={chooseFiles} disabled={busy} />
    </label>
    <div className="admin-image-grid">
      {images.map((url, index) => <div className="admin-image-card" key={url}>
        <div className="admin-image-preview">
          <Image src={url} alt={`Product image ${index + 1}`} fill sizes="(max-width: 600px) 96px, 112px" className="object-contain" />
          <span className={`admin-image-number ${index === 0 ? 'primary' : ''}`}>{index === 0 ? 'Primary' : index + 1}</span>
          <button type="button" className="admin-image-remove" aria-label={`Remove image ${index + 1}`} onClick={() => onChange(images.filter((_, position) => position !== index))}><FiX aria-hidden="true" /></button>
        </div>
        <button type="button" className="admin-image-primary" disabled={busy || index === 0} onClick={() => onChange([url, ...images.filter(image => image !== url)])}>
          <FiStar aria-hidden="true" />{index === 0 ? 'Primary image' : 'Make primary'}
        </button>
      </div>)}
      {previews.map((file, index) => <div className="admin-image-card" key={file.url}>
        <div className="admin-image-preview">
          {/* Browser-only object URLs show selected files before upload finishes. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={file.url} alt={`Uploading ${file.name}`} />
          <span className="admin-image-number">{images.length === 0 && index === 0 ? 'Primary' : 'Uploading'}</span>
        </div>
        <p className="admin-image-filename">{file.name}</p>
      </div>)}
    </div>
    {!images.length && !previews.length && <p className="admin-image-empty">No images yet. Choose photos to preview them here.</p>}
  </fieldset>;
}
