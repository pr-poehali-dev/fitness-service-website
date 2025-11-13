import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Обслуживание фитнес-клубов',
      description: 'Комплексное техническое обслуживание тренажёров и спортивного оборудования'
    },
    {
      icon: 'Settings',
      title: 'Монтаж оборудования',
      description: 'Профессиональная установка и настройка любого спортивного оборудования'
    },
    {
      icon: 'Scissors',
      title: 'Перешивка инвентаря',
      description: 'Качественная перешивка и восстановление спортивного инвентаря'
    },
    {
      icon: 'Truck',
      title: 'Переезд залов под ключ',
      description: 'Полный комплекс услуг по переезду тренажёрных залов'
    }
  ];

  const portfolio = [
    { name: 'Фитнес-клуб "Атлант"', type: 'Монтаж оборудования', area: '1500 м²' },
    { name: 'Спортзал "Олимп"', type: 'Комплексное обслуживание', area: '800 м²' },
    { name: 'CrossFit Box "Титан"', type: 'Переезд под ключ', area: '600 м²' },
    { name: 'Тренажёрный зал "Энергия"', type: 'Перешивка инвентаря', area: '400 м²' }
  ];

  const advantages = [
    { icon: 'Award', title: 'Опыт 10+ лет', text: 'Работаем с 2014 года' },
    { icon: 'Users', title: 'Профессиональная команда', text: '15+ сертифицированных специалистов' },
    { icon: 'Clock', title: 'Быстрая реакция', text: 'Выезд в течение 2 часов' },
    { icon: 'CheckCircle', title: 'Гарантия качества', text: 'Официальная гарантия на все работы' }
  ];

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-secondary">FitService</div>
          <div className="hidden md:flex gap-8">
            {['Главная', 'Услуги', 'Портфолио', 'Преимущества', 'О нас', 'Контакты'].map((item) => {
              const id = item === 'Главная' ? 'home' : item === 'Услуги' ? 'services' : 
                        item === 'Портфолио' ? 'portfolio' : item === 'Преимущества' ? 'advantages' :
                        item === 'О нас' ? 'about' : 'contacts';
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === id ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <Button onClick={() => scrollToSection('contacts')} size="sm">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary leading-tight">
              Профессиональное обслуживание<br />фитнес-клубов
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Монтаж, обслуживание, перешивка и переезды тренажёрных залов под ключ
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{project.type}</p>
                <p className="text-sm text-primary font-medium">{project.area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={advantage.icon} className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-secondary">О компании</h2>
          <Card className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мы — профессиональная компания, специализирующаяся на комплексном обслуживании фитнес-клубов и тренажёрных залов. 
              С 2014 года помогаем владельцам спортивных объектов поддерживать оборудование в идеальном состоянии.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша команда состоит из сертифицированных специалистов с многолетним опытом работы. 
              Мы предоставляем полный спектр услуг: от монтажа нового оборудования до комплексного переезда залов под ключ.
            </p>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-lg mb-8 text-white/90">
            Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={20} />
              <span className="text-lg">info@fitservice.ru</span>
            </div>
          </div>
          <Button size="lg" variant="secondary">
            Заказать звонок
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 FitService. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
