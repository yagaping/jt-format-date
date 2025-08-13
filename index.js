// 通过日期计算年龄
function currentAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  // 计算年份差
  let age = today.getFullYear() - birth.getFullYear();
  
  // 调整未过生日的情况
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
// 计算两个日期之间的年龄差
function gdiffAge(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  // 计算年份差
  let years = d2.getFullYear() - d1.getFullYear();
  
  // 调整月份和日期
  const monthDiff = d2.getMonth() - d1.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && d2.getDate() < d1.getDate())) {
    years--;
  }
  
  return years;
}
// 获取当前星期
function getCurrentWeekday(date=new Date) {
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const today = new Date(date);
  return days[today.getDay()];
}
// 导出模块
module.exports = {
    currentAge,
    gdiffAge,
    getCurrentWeekday
};