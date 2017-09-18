export const fetchBenches = () => (
  $.ajax({
    url: '/api/benches'
  })
);
