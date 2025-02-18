// 在页面加载时恢复上次选择的语言
window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'en'; // 默认英文
    document.getElementById('language-selector').value = savedLanguage;
    changeLanguage(); // 触发语言切换
};

// 更新语言时保存到 localStorage
function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    localStorage.setItem('language', language); // 保存语言设置
    // ...其余代码保持不变
}
function changeLanguage() {
    const language = document.getElementById('language-selector').value;

    const translations = {
        zh: {
            aboutText: "这是一个太阳能培训学院。在这里，您将找到课程、材料和证书，以提高您的技能。",
            coursesHeader: "我们的课程",
            course1: "太阳能基础",
            course2: "高级太阳能解决方案",
            course3: "安装与维护",
            menuCourses: "课程",
            menuFAQ: "常见问题",
            menuFeedback: "反馈"
        },
        en: {
            aboutText: "This is an academy for training in solar energy. Here you will find courses, materials, and certifications to enhance your skills.",
            coursesHeader: "Our Courses",
            course1: "Solar Basics",
            course2: "Advanced Solar Solutions",
            course3: "Installation and Maintenance",
            menuCourses: "Courses",
            menuFAQ: "FAQ",
            menuFeedback: "Feedback"
        },
 
