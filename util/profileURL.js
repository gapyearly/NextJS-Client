export default function getFullName(author) {
  return `/dashboard/community/profile?user=${author.username}`;
}
