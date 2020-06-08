var xueUniqueIdMap = {};
function uniqueId(prefix) {
  if (prefix === void 0) {
    prefix = '$xue$';
  }
  if (!xueUniqueIdMap[prefix]) {
    xueUniqueIdMap[prefix] = 0;
  }
  xueUniqueIdMap[prefix]++;
  return prefix + ('' + xueUniqueIdMap[prefix]);
}
export default uniqueId;
