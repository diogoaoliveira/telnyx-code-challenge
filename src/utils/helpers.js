export function sortByNewestDate(postA, postB) {
  const dateA = new Date(postA.publish_date);
  const dateB = new Date(postB.publish_date);

  return dateB.getTime() - dateA.getTime();
}
