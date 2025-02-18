function changeLanguage() {
    const language = document.getElementById('language-selector').value;

    const translations = {
        zh: {
            aboutText: "这是一个太阳能培训学院。在这里，您将找到课程、材料和证书，以提高您的技能。",
            coursesHeader: "我们的课程",
            course1: "太阳能基础",
            course2: "高级太阳能解决方案",
            course3: "安装与维护"
        },
        en: {
            aboutText: "This is an academy for training in solar energy. Here you will find courses, materials, and certifications to enhance your skills.",
            coursesHeader: "Our Courses",
            course1: "Solar Basics",
            course2: "Advanced Solar Solutions",
            course3: "Installation and Maintenance"
        },
        my: {
            aboutText: "ဤသည်သည် ဆာလာစနစ်အင်အားဖြင့် ပညာသင်ကြားခြင်း အဖွဲ့အစည်းဖြစ်သည်။ ဒီမှာ သင်သည် သင်တန်းများ၊ ပစ္စည်းများ နှင့် လက်မှတ်များကို ရရှိပါလိမ့်မည်၊ မိမိ၏ကျွမ်းကျင်မှုကို မြှင့်တင်ရန်။",
            coursesHeader: "ကျွန်ုပ်တို့၏သင်တန်းများ",
            course1: "Solar Basics",
            course2: "Advanced Solar Solutions",
            course3: "Installation and Maintenance"
        },
        th: {
            aboutText: "นี่คือสถาบันการฝึกอบรมพลังงานแสงอาทิตย์ ที่นี่คุณจะพบหลักสูตร วัสดุ และการรับรองเพื่อเสริมทักษะของคุณ",
            coursesHeader: "หลักสูตรของเรา",
            course1: "Solar Basics",
            course2: "Advanced Solar Solutions",
            course3: "Installation and Maintenance"
        }
    };

    // Update text based on selected language
    document.getElementById('about-text').innerText = translations[language].aboutText;
    document.getElementById('courses-header').innerText = translations[language].coursesHeader;
    document.getElementById('course-1').innerText = translations[language].course1;
    document.getElementById('course-2').innerText = translations[language].course2;
    document.getElementById('course-3').innerText = translations[language].course3;
}
