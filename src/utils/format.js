export function ratingToStars(r) {
  // 0-10 rating -> 0-5 stars
  const stars = Math.round((r / 10) * 5);
  return '★'.repeat(stars) + '☆'.repeat(5 - stars);
}
