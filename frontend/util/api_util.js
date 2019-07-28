export const fetchConflicts = () => (
  jQuery.ajax({
    method: 'GET',
    url: 'api/conflicts'
  })
);
