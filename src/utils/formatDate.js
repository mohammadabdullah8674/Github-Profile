export function timeAgo(date) {
    const currentDate = new Date();
    const providedDate = new Date(date);
  
    const timeDifference = currentDate - providedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  }
  
//   // Example usage:
//   const someDate = '2022-01-01T12:00:00Z'; // Replace this with your actual date
//   const formattedTimeAgo = timeAgo(someDate);
//   console.log(formattedTimeAgo);
  