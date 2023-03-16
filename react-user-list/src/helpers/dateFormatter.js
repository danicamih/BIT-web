export default function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return formattedDate.replace(/\//g, '-');
  }
  