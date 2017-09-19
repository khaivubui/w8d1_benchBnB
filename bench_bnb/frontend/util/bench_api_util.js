export const fetchBenches = (bounds) => (
  $.ajax({
    url: '/api/benches',
    data: { bounds }
  })
);
