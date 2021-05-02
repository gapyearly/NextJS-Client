export default function getFullName(author) {
  if (!author.firstName) author.firstName = "";
  if (!author.lastName) author.lastName = "";
  return `${author.firstName} ${author.lastName}`;
}
