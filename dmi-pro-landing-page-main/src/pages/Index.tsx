
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Target, Users, BookOpen, Award, Globe, BarChart3, Search, Mail, Smartphone, TrendingUp, Brain, Zap } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    webinars: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    toast({
      title: language === 'en' ? "Registration Submitted" : "تم إرسال التسجيل",
      description: language === 'en' ? "We'll contact you soon via email." : "سيتم التواصل معك قريبًا عبر البريد الإلكتروني.",
    });
  };

  const content = {
    en: {
      nav: {
        switchLang: "العربية"
      },
      hero: {
        headline: "Become a Certified Digital Marketing Professional",
        subheadline: "Enroll in the globally recognized DMI Professional Diploma delivered by Enhance Training Institute",
        cta: "Register Your Interest"
      },
      about: {
        title: "About the Certification",
        description: "The DMI Pro is a globally recognized diploma designed by the Digital Marketing Institute and delivered by Enhance Training Institute. Whether you're new to the field or building on experience, this program equips you with the most up-to-date digital marketing skills — from AI-powered strategies to SEO, paid media, analytics, and content marketing."
      },
      learn: {
        title: "What You'll Learn",
        items: [
          {
            icon: Brain,
            title: "AI-Powered Strategies",
            description: "Build full-funnel digital strategies using AI and automation"
          },
          {
            icon: Search,
            title: "SEO & Paid Media",
            description: "Master SEO, Google Ads, email marketing, and content creation"
          },
          {
            icon: Smartphone,
            title: "Multi-Platform Campaigns",
            description: "Execute campaigns across social, display, and eCommerce platforms"
          },
          {
            icon: BarChart3,
            title: "Analytics Mastery",
            description: "Optimize marketing with Google Analytics 4 (GA4)"
          },
          {
            icon: Target,
            title: "Strategic Planning",
            description: "Develop creative briefs, buyer personas, and agile project plans"
          },
          {
            icon: Zap,
            title: "Lifetime Access",
            description: "Gain lifetime access to toolkits, templates, and live DMI webinars"
          }
        ]
      },
      why: {
        title: "Why Choose Enhance + DMI",
        description: "Enhance Training Institute brings the globally trusted DMI certification to the GCC region, ensuring learners receive localized support with international credibility. DMI is the world's #1 authority in digital marketing training — with 330,000+ members, 80,000+ certified professionals, and a reputation for career-boosting results."
      },
      modules: {
        title: "Course Modules (Core Subjects)",
        items: [
          "Digital Marketing Strategy",
          "SEO & Google Ads",
          "Social Media & Content Marketing",
          "Email Marketing & Automation",
          "Data, GA4, and Campaign Analytics",
          "Web Optimization & eCommerce",
          "AI for Marketing & Strategic Planning",
          "Professional Skills: Communication, Agile, UX"
        ]
      },
      audience: {
        title: "Who Should Enroll",
        items: [
          "Marketing professionals",
          "Business owners and entrepreneurs",
          "PR, content, and brand managers",
          "Analysts and communication specialists",
          "New graduates and career switchers"
        ]
      },
      form: {
        title: "Register Your Interest",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        company: "Company",
        jobTitle: "Job Title",
        webinars: "Are you interested in live webinars?",
        webinarsYes: "Yes",
        webinarsNo: "No",
        submit: "Register Your Interest",
        confirmation: "Thank you. We'll contact you soon via email."
      }
    },
    ar: {
      nav: {
        switchLang: "English"
      },
      hero: {
        headline: "احصل على شهادة احترافية في التسويق الرقمي",
        subheadline: "سجل الآن في دبلومة التسويق الرقمي المعتمدة عالميًا من DMI وتُقدّم من معهد إنهانس للتدريب",
        cta: "سجل اهتمامك الآن"
      },
      about: {
        title: "عن الشهادة",
        description: "دبلومة DMI Pro هي شهادة معترف بها عالميًا من معهد DMI، تُقدَّم محليًا من خلال معهد إنهانس للتدريب. سواء كنت مبتدئًا أو محترفًا، سيوفّر لك البرنامج أحدث المهارات في التسويق الرقمي، بما في ذلك استراتيجيات الذكاء الاصطناعي، تحسين محركات البحث، الإعلانات المدفوعة، التحليلات، وتسويق المحتوى."
      },
      learn: {
        title: "ما ستتعلمه",
        items: [
          {
            icon: Brain,
            title: "استراتيجيات الذكاء الاصطناعي",
            description: "بناء استراتيجيات تسويقية رقمية شاملة باستخدام الذكاء الاصطناعي"
          },
          {
            icon: Search,
            title: "تحسين محركات البحث والإعلانات",
            description: "إتقان تحسين محركات البحث، جوجل أدز، التسويق بالبريد الإلكتروني، وإنشاء المحتوى"
          },
          {
            icon: Smartphone,
            title: "حملات متعددة المنصات",
            description: "تنفيذ حملات على الشبكات الاجتماعية والإعلانات والعروض التجارية"
          },
          {
            icon: BarChart3,
            title: "إتقان التحليلات",
            description: "تحسين الأداء باستخدام Google Analytics 4"
          },
          {
            icon: Target,
            title: "التخطيط الاستراتيجي",
            description: "تطوير الخطط الإبداعية والشخصيات الشرائية وخطط المشاريع"
          },
          {
            icon: Zap,
            title: "الوصول الدائم",
            description: "الوصول الدائم إلى أدوات ونماذج ومحاضرات DMI التفاعلية"
          }
        ]
      },
      why: {
        title: "لماذا تختار إنهانس + DMI",
        description: "يُقدم معهد إنهانس للتدريب شهادة DMI الموثوقة عالميًا للمنطقة الخليجية، بدعم محلي ومحتوى عالي الجودة. يُعد DMI المرجع الأول عالميًا في تدريب التسويق الرقمي، مع أكثر من 330,000 عضو و80,000 محترف معتمد، وسجل حافل بتحقيق النتائج المهنية."
      },
      modules: {
        title: "وحدات الدورة (المواد الأساسية)",
        items: [
          "استراتيجية التسويق الرقمي",
          "تحسين محركات البحث والإعلانات",
          "التسويق عبر الشبكات الاجتماعية والمحتوى",
          "التسويق بالبريد الإلكتروني والأتمتة",
          "البيانات وتحليلات الحملات باستخدام GA4",
          "تحسين المواقع والتجارة الإلكترونية",
          "الذكاء الاصطناعي للتخطيط التسويقي",
          "المهارات المهنية: الاتصال، التفكير الاستراتيجي، UX"
        ]
      },
      audience: {
        title: "من يجب أن يسجل",
        items: [
          "محترفو التسويق",
          "أصحاب الأعمال ورواد الأعمال",
          "مدراء العلاقات العامة والمحتوى والعلامة التجارية",
          "محللو البيانات وأخصائيو الاتصال",
          "الخريجون الجدد والراغبون في تغيير المسار المهني"
        ]
      },
      form: {
        title: "سجل اهتمامك",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        company: "الشركة",
        jobTitle: "المسمى الوظيفي",
        webinars: "هل أنت مهتم بالندوات التفاعلية المباشرة؟",
        webinarsYes: "نعم",
        webinarsNo: "لا",
        submit: "سجل اهتمامك الآن",
        confirmation: "شكرًا لك. سيتم التواصل معك قريبًا عبر البريد الإلكتروني."
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className={`min-h-screen bg-white font-open-sans ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <img 
                src="/lovable-uploads/86afc084-b0d5-4482-85ed-af944fb74d13.png" 
                alt="Digital Marketing Institute" 
                className="h-12"
              />
              <img 
                src="/lovable-uploads/9cab84f7-6082-41a9-a20e-a2fe214eb138.png" 
                alt="Enhance Training Institute" 
                className="h-12"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={toggleLanguage}
              className="border-dmi-blue text-dmi-blue hover:bg-dmi-light-blue"
            >
              {currentContent.nav.switchLang}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dmi-light-blue to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk text-dmi-blue mb-6 leading-tight">
              {currentContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {currentContent.hero.subheadline}
            </p>
            <Button 
              size="lg" 
              className="bg-dmi-blue hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('interest-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {currentContent.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk text-dmi-blue mb-6">
              {currentContent.about.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {currentContent.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-space-grotesk text-dmi-blue text-center mb-12">
            {currentContent.learn.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.learn.items.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-dmi-light-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-dmi-blue" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-dmi-blue">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold font-space-grotesk text-dmi-blue mb-8">
              {currentContent.why.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {currentContent.why.description}
            </p>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-dmi-light-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-space-grotesk text-dmi-blue text-center mb-12">
            {currentContent.modules.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {currentContent.modules.items.map((module, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-enhance-green flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{module}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-space-grotesk text-dmi-blue text-center mb-12">
            {currentContent.audience.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.audience.items.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg">
                <Users className="w-6 h-6 text-dmi-blue flex-shrink-0" />
                <span className="text-lg font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section id="interest-form" className="py-16 bg-gradient-to-b from-dmi-light-blue to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-space-grotesk text-dmi-blue">
                {currentContent.form.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-base font-medium text-gray-700">
                      {currentContent.form.fullName} *
                    </Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-gray-700">
                      {currentContent.form.email} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base font-medium text-gray-700">
                      {currentContent.form.phone} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-base font-medium text-gray-700">
                      {currentContent.form.company}
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="jobTitle" className="text-base font-medium text-gray-700">
                      {currentContent.form.jobTitle}
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                      className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="webinars" className="text-base font-medium text-gray-700">
                      {currentContent.form.webinars}
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, webinars: value})}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-dmi-blue focus:ring-dmi-blue">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="yes">{currentContent.form.webinarsYes}</SelectItem>
                        <SelectItem value="no">{currentContent.form.webinarsNo}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-dmi-blue hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {currentContent.form.submit}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-enhance-green mx-auto mb-4" />
                  <p className="text-lg text-gray-700 font-medium">
                    {currentContent.form.confirmation}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dmi-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-8">
              <img 
                src="/lovable-uploads/9cab84f7-6082-41a9-a20e-a2fe214eb138.png" 
                alt="Enhance Training Institute" 
                className="h-10 brightness-0 invert"
              />
              <img 
                src="/lovable-uploads/86afc084-b0d5-4482-85ed-af944fb74d13.png" 
                alt="Digital Marketing Institute" 
                className="h-10 brightness-0 invert"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="https://enhance-ksa.com" className="text-white hover:text-enhance-green transition-colors">
                  Main ETI Website
                </a>
                <a href="#" className="text-white hover:text-enhance-green transition-colors">
                  Privacy Policy
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/enhance_ksa" className="text-white hover:text-enhance-green transition-colors">
                  LinkedIn
                </a>
                <a href="https://instagram.com/enhance_ksa" className="text-white hover:text-enhance-green transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm">Certification issued by the Digital Marketing Institute</span>
              <img 
                src="/lovable-uploads/86afc084-b0d5-4482-85ed-af944fb74d13.png" 
                alt="DMI" 
                className="h-6 brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
