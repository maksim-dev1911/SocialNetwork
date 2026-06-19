export function getRelativeTime(timestamp: number) {
  const msPerHour = 60 * 60 * 1000;
  const msPerMinute = 60 * 1000;

  const elapsed = timestamp - Date.now();

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always' });

  const hours = Math.round(elapsed / msPerHour);

  if (Math.abs(hours) >= 1) {
    return rtf.format(hours, 'hour');
  } else {
    const minutes = Math.round(elapsed / msPerMinute);
    return rtf.format(minutes, 'minute');
  }
}