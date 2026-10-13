function inlineText(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
      : part
  );
}

export default function ProductDescription({ text }) {
  const blocks = [];
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const heading = trimmed.match(/^#{1,6}\s+(.+)$/);
    const bullet = trimmed.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      const previous = blocks.at(-1);
      if (previous?.type === 'list') previous.items.push(bullet[1]);
      else blocks.push({ type: 'list', items: [bullet[1]] });
    } else blocks.push({ type: heading ? 'heading' : 'paragraph', text: heading ? heading[1] : trimmed });
  }
  return <div className="space-y-4 text-base text-muted-foreground leading-8 break-words max-w-3xl">
    {blocks.map((block, index) => block.type === 'heading'
      ? <h3 key={index} className="text-lg font-semibold text-foreground">{inlineText(block.text)}</h3>
      : block.type === 'list'
        ? <ul key={index} className="list-disc pl-5 space-y-1 marker:text-primary">{block.items.map((item, itemIndex) => <li key={itemIndex}>{inlineText(item)}</li>)}</ul>
        : <p key={index}>{inlineText(block.text)}</p>
    )}
  </div>;
}
