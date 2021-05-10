export default function getProfileURL(author) {
  return `/dashboard/community/profile?user=${author.username}`;
}
